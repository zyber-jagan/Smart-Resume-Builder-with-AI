# 🚀 Smart Resume Builder with AI Suggestions

A modern, interactive resume builder with AI-powered suggestions using React.js, Node.js, OpenAI API, and MongoDB.

## ✨ Live Demo

🌐 **Try it now:** [https://yourusername.github.io/resume-project/](https://yourusername.github.io/resume-project/)

*(Replace with your GitHub Pages URL)*

## 🎯 Features

- 📝 **Interactive Resume Builder**: Create professional resumes with an intuitive form interface
- 🤖 **AI Suggestions**: Get intelligent recommendations to improve your resume using OpenAI GPT-3.5
- 👁️ **Live Preview**: See your resume in real-time as you build it
- 📄 **PDF Export**: Download your resume as a professional PDF document
- 💾 **Save & Load**: Store your resume data in MongoDB
- 🎨 **Modern UI**: Built with Tailwind CSS for a beautiful, responsive design
- 🌐 **Fully Deployable**: Works on GitHub Pages, Vercel, Netlify, and more!

## Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: OpenAI API (GPT-3.5)
- **PDF Generation**: Puppeteer

## Quick Start

### Local Development

1. **Install Dependencies:**
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

2. **Setup Environment:**
   - Create `backend/.env` file
   - Add your MongoDB URI and OpenAI API key
   - See `backend/env.example` for reference

3. **Run Backend:**
   ```bash
   cd backend
   npm start
   ```

4. **Run Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

5. **Open Browser:**
   Visit: http://localhost:3000

## Deployment

See deployment guides:
- **[🎯START_HERE_TO_DEPLOY.md](🎯START_HERE_TO_DEPLOY.md)** - Quick deployment guide
- **[DEPLOY_GITHUB_PAGES.md](DEPLOY_GITHUB_PAGES.md)** - GitHub Pages deployment
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Full deployment guide

## Project Structure

```
resume project/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── services/        # AI and PDF services
│   ├── server.js        # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## Documentation

- **[START_HERE.md](START_HERE.md)** - Local setup guide
- **[FEATURES.md](FEATURES.md)** - All features list
- **[QUICKSTART.md](QUICKSTART.md)** - Quick reference
- **[SETUP.md](SETUP.md)** - Detailed setup instructions

## Features in Detail

### AI-Powered Suggestions
Get intelligent recommendations for:
- Content improvement
- ATS optimization
- Keywords enhancement
- Structure optimization
- Professional tone

### PDF Export
- Professional formatting
- Print-ready layout
- High-quality output
- One-click download

### Resume Sections
- Personal Information
- Professional Experience
- Education
- Skills
- Projects
- Certifications
- Languages

## Environment Variables

### Backend (.env):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/resume_builder
OPENAI_API_KEY=your_openai_api_key
```

### Frontend (.env.local):
```env
VITE_API_URL=http://localhost:5000
```

## Requirements

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- OpenAI API key
- Git

## Troubleshooting

### "Cannot connect to backend"
- Make sure backend server is running on port 5000
- Check CORS settings

### "OpenAI API error"
- Verify your API key is correct
- Check you have credits

### "MongoDB connection error"
- Verify MongoDB is running
- Check connection string
- Verify network access (for Atlas)

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.

## Author

Built with ❤️ for job seekers worldwide.

---

**Ready to build your perfect resume?** Follow the [🎯START_HERE_TO_DEPLOY.md](🎯START_HERE_TO_DEPLOY.md) guide!

