# 🚀 How to Run Smart Resume Builder

## Step 1: Install All Dependencies

Open PowerShell in this directory and run these commands:

### Install Backend Dependencies
```powershell
cd backend
npm install
cd ..
```

### Install Frontend Dependencies
```powershell
cd frontend
npm install
cd ..
```

---

## Step 2: Create Environment File

Create a file named `.env` in the `backend` folder:

```powershell
cd backend
notepad .env
```

Then paste this content and **UPDATE THE OPENAI_API_KEY**:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/resume_builder
OPENAI_API_KEY=your_openai_api_key_here
```

**To get OpenAI API Key:**
1. Go to https://platform.openai.com/api-keys
2. Sign up or log in
3. Click "Create new secret key"
4. Copy the key and paste it in your .env file

**Important:** Replace `your_openai_api_key_here` with your actual API key!

---

## Step 3: Start MongoDB

You have TWO options:

### Option A: Use Local MongoDB (if installed)
```powershell
mongod
```

### Option B: Use MongoDB Atlas (Cloud - Recommended)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a FREE account
3. Create a free cluster
4. Get your connection string
5. Update MONGODB_URI in your .env file with the Atlas connection string

**For Atlas, use a connection string like:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/resume_builder
```

---

## Step 4: Start the Backend Server

Open **Terminal 1** (PowerShell):

```powershell
cd backend
npm start
```

You should see:
```
MongoDB Connected
Server running on port 5000
```

✅ **Keep this terminal open!**

---

## Step 5: Start the Frontend Server

Open **Terminal 2** (a NEW PowerShell window):

```powershell
cd frontend
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
```

✅ **Keep this terminal open too!**

---

## Step 6: Open in Browser

Open your browser and go to:

**http://localhost:3000**

---

## ✅ You're All Set!

Now you can:
- Fill in your resume information
- Preview your resume
- Get AI suggestions
- Export as PDF

---

## 🐛 Troubleshooting

### Problem: "Cannot connect to backend"
**Solution:** Make sure backend is running in Terminal 1

### Problem: "OpenAI API error"
**Solution:** 
- Check your API key in backend/.env
- Make sure it starts with `sk-`
- Check you have credits in your OpenAI account

### Problem: "MongoDB connection error"
**Solution:**
- For local MongoDB: Make sure `mongod` is running
- For Atlas: Check your connection string in .env

### Problem: Dependencies not installing
**Solution:**
```powershell
cd backend
npm install --force
cd ../frontend
npm install --force
```

### Problem: Puppeteer installation issues
**Solution:** This is normal, just ignore it or run:
```powershell
cd backend
npm install puppeteer --force
```

---

## 🎯 Quick Command Summary

### Install everything:
```powershell
cd backend && npm install
cd ../frontend && npm install
```

### Run backend:
```powershell
cd backend
npm start
```

### Run frontend:
```powershell
cd frontend
npm run dev
```

### Access app:
Open browser → http://localhost:3000

---

## Need Help?

If something still doesn't work:

1. Check both terminals are running
2. Check your .env file exists and has correct values
3. Check MongoDB is running (or Atlas is accessible)
4. Check OpenAI API key is valid

Good luck! 🚀

