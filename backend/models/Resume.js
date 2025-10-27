const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  company: String,
  position: String,
  startDate: String,
  endDate: String,
  description: String,
  achievements: [String]
});

const EducationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  field: String,
  startDate: String,
  endDate: String,
  gpa: String,
  achievements: [String]
});

const SkillSchema = new mongoose.Schema({
  name: String,
  level: String // beginner, intermediate, advanced, expert
});

const ResumeSchema = new mongoose.Schema({
  personalInfo: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    location: String,
    linkedIn: String,
    portfolio: String,
    summary: String
  },
  experience: [ExperienceSchema],
  education: [EducationSchema],
  skills: [SkillSchema],
  projects: [{
    name: String,
    description: String,
    technologies: [String],
    link: String
  }],
  certifications: [{
    name: String,
    issuer: String,
    date: String,
    link: String
  }],
  languages: [{
    name: String,
    proficiency: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resume', ResumeSchema);

