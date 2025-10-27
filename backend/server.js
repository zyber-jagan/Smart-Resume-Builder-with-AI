const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Resume = require('./models/Resume');
const { getAISuggestions } = require('./services/aiService');
const { generatePDF } = require('./services/pdfService');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/resume_builder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes

// Save/Update Resume
app.post('/api/resume', async (req, res) => {
  try {
    const resumeData = req.body;
    
    // If resumeId exists, update; otherwise create new
    if (resumeData._id) {
      const updatedResume = await Resume.findByIdAndUpdate(
        resumeData._id,
        resumeData,
        { new: true, upsert: true }
      );
      res.json(updatedResume);
    } else {
      const newResume = new Resume(resumeData);
      await newResume.save();
      res.json(newResume);
    }
  } catch (error) {
    console.error('Error saving resume:', error);
    res.status(500).json({ error: 'Failed to save resume' });
  }
});

// Get Resume by ID
app.get('/api/resume/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    res.json(resume);
  } catch (error) {
    console.error('Error fetching resume:', error);
    res.status(500).json({ error: 'Failed to fetch resume' });
  }
});

// Get AI Suggestions
app.post('/api/suggestions', async (req, res) => {
  try {
    const { resumeData } = req.body;
    const suggestions = await getAISuggestions(resumeData);
    res.json({ suggestions });
  } catch (error) {
    console.error('Error getting AI suggestions:', error);
    res.status(500).json({ error: 'Failed to get AI suggestions', message: error.message });
  }
});

// Generate PDF
app.post('/api/generate-pdf', async (req, res) => {
  try {
    const { resumeData } = req.body;
    const pdfBuffer = await generatePDF(resumeData);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

