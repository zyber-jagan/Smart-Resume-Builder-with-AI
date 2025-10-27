# ✅ Test and Run Your Resume Builder

## 🎯 Current Status

✅ Dependencies installed  
✅ All files created  
✅ Ready to run

---

## 🚀 How to Run (Follow These Steps)

### Step 1: Create Backend .env File

**Open PowerShell** and run:

```powershell
notepad backend\.env
```

**Copy and paste this:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/resume_builder
OPENAI_API_KEY=your_openai_api_key_here
```

**Change `your_openai_api_key_here` to your actual OpenAI key!**

**Get OpenAI key:**
1. Go to: https://platform.openai.com/api-keys
2. Sign up
3. Create new key
4. Copy it (starts with `sk-`)
5. Paste in the .env file

**Save and close Notepad.**

---

### Step 2: Start MongoDB (Choose One)

**Option A: Local MongoDB** (if installed)
```powershell
mongod
```
*(Leave this running)*

**Option B: MongoDB Atlas (Cloud - Easier!)** ✅ RECOMMENDED
1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up (FREE)
3. Create cluster
4. Get connection string
5. Update MONGODB_URI in .env file

---

### Step 3: Start Backend Server

Open **NEW PowerShell window:**

```powershell
cd "C:\Users\LENOVO\Desktop\resume project\backend"
npm start
```

Wait for this message:
```
Server running on port 5000
MongoDB Connected
```

✅ **Keep this window open!**

---

### Step 4: Start Frontend Server

Open **ANOTHER NEW PowerShell window:**

```powershell
cd "C:\Users\LENOVO\Desktop\resume project\frontend"
npm run dev
```

Wait for this message:
```
Local: http://localhost:3000/
```

✅ **Keep this window open too!**

---

### Step 5: Open in Browser

Go to: **http://localhost:3000**

---

## ✅ You Should See:

- Resume builder form
- Three tabs: Build Resume, Preview, AI Suggestions
- Input fields to fill
- Beautiful modern UI

---

## 🐛 If It's NOT Working:

### Error: "Cannot GET /"
**Fix:** Make sure backend is running on port 5000

### Error: "Network Error" or "Cannot connect"
**Fix:** 
1. Check backend window is open and running
2. Make sure you see "Server running on port 5000"
3. Try refreshing the page

### Error: "MongoDB connection"
**Fix:**
- Use MongoDB Atlas (cloud) instead of local
- Or make sure mongod is running

### Error: Blank page
**Fix:**
- Check browser console for errors (F12)
- Make sure both servers are running
- Try different browser

### Nothing happens when clicking buttons
**Fix:**
- Open browser console (F12)
- Check for JavaScript errors
- Make sure backend is responding

---

## 📝 Testing Checklist

When it works, test these:
- [ ] Fill in your name, email
- [ ] Add work experience
- [ ] Add education
- [ ] Add skills
- [ ] Click "Save Resume"
- [ ] Click "Preview" tab
- [ ] Click "AI Suggestions" → "Get AI Suggestions"
- [ ] Click "Export as PDF"

---

## 🚀 Once It Works Locally:

**Then you can deploy to GitHub Pages:**

1. Read: **[🎯START_HERE_TO_DEPLOY.md](🎯START_HERE_TO_DEPLOY.md)**
2. Follow the deployment guide
3. Make your app live!

---

## 💡 Quick Commands Reference

**Start Backend:**
```powershell
cd "C:\Users\LENOVO\Desktop\resume project\backend"
npm start
```

**Start Frontend:**
```powershell
cd "C:\Users\LENOVO\Desktop\resume project\frontend"
npm run dev
```

**Stop Servers:**
Press `Ctrl + C` in the terminal windows

---

## ✅ Success!

If you can:
- Open http://localhost:3000
- See the resume form
- Fill in information
- Click buttons

**Then it's working!** 🎉

---

## 🆘 Still Not Working?

**Tell me:**
1. What happens when you open http://localhost:3000?
2. What errors do you see in the browser console? (Press F12)
3. Are both servers running?
4. What specific error message do you get?

This will help me fix it faster!

