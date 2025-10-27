# Quick Start Guide

Get the Smart Resume Builder running in 5 minutes!

## Step 1: Install MongoDB

### Windows
- Download and install MongoDB from https://www.mongodb.com/try/download/community
- Or use MongoDB Atlas (cloud) - no installation needed

### macOS
```bash
brew tap mongodb/brew
brew install mongodb-community
```

### Linux
```bash
# Ubuntu/Debian
sudo apt-get install mongodb
```

## Step 2: Install Node.js Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## Step 3: Configure Environment

Create `backend/.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/resume_builder
OPENAI_API_KEY=your_openai_api_key_here
```

**Get OpenAI API Key:**
1. Go to https://platform.openai.com/api-keys
2. Sign up/login
3. Create a new API key
4. Copy and paste it in your `.env` file

**MongoDB Atlas (Alternative to local MongoDB):**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get your connection string
4. Replace `MONGODB_URI` in `.env` with your Atlas connection string

## Step 4: Start the Application

### Terminal 1 - Backend
```bash
cd backend
npm start
```

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

## Step 5: Open Browser

Go to: **http://localhost:3000**

## That's it! 🎉

You're ready to build your resume with AI-powered suggestions!

---

## Troubleshooting

**"MongoDB connection error"**
- Make sure MongoDB is running: `mongod` (or use MongoDB Atlas)

**"AI suggestions not working"**
- Check your OpenAI API key in `backend/.env`
- Make sure you have credits on your OpenAI account

**"Can't connect to backend"**
- Verify backend is running on port 5000
- Check if port 5000 is already in use

**"Frontend won't start"**
- Check if port 3000 is already in use
- Try: `npm install` again in frontend folder

