# 🚀 START HERE - Smart Resume Builder Setup

## ⚠️ FIRST: Fix PowerShell Execution Policy

You need to allow PowerShell scripts to run. Open PowerShell **AS ADMINISTRATOR** and run:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Type `Y` when asked to proceed.

---

## 📋 Step-by-Step Setup

### Step 1: Open PowerShell in this folder

Right-click this folder → **Open in Terminal**

### Step 2: Install Backend Dependencies

```powershell
cd backend
npm install
cd ..
```

**Wait for it to finish!** ⏳

### Step 3: Install Frontend Dependencies

```powershell
cd frontend
npm install
cd ..
```

**Wait for it to finish!** ⏳

### Step 4: Create .env File

Create a file named `.env` in the `backend` folder:

**Option A: Using Notepad**
```powershell
notepad backend\.env
```

**Option B: Using PowerShell**
```powershell
New-Item backend\.env -ItemType File
notepad backend\.env
```

Paste this content:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/resume_builder
OPENAI_API_KEY=your_openai_api_key_here
```

**⚠️ IMPORTANT:** Replace `your_openai_api_key_here` with your actual OpenAI API key!

**Get your OpenAI API key:**
1. Go to https://platform.openai.com/api-keys
2. Sign up or log in
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)
5. Paste it in the .env file

### Step 5: Set Up MongoDB

**Option A: Use Local MongoDB (if installed)**
```powershell
mongod
```
Keep this running in a separate window.

**Option B: Use MongoDB Atlas (Cloud - Easiest!)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free"
3. Sign up for free account
4. Create a free cluster (choose any region)
5. Create a database user (remember username and password)
6. Click "Network Access" → "Add IP Address" → "Allow Access from Anywhere"
7. Click "Database" → "Connect" → "Connect your application"
8. Copy the connection string (looks like: `mongodb+srv://...`)
9. Replace the `MONGODB_URI` in your `.env` file with this connection string

### Step 6: Start Backend Server

Open **NEW PowerShell window**:

```powershell
cd "C:\Users\LENOVO\Desktop\resume project\backend"
npm start
```

✅ You should see: `Server running on port 5000`

**Keep this window open!**

### Step 7: Start Frontend Server

Open **ANOTHER NEW PowerShell window**:

```powershell
cd "C:\Users\LENOVO\Desktop\resume project\frontend"
npm run dev
```

✅ You should see: `Local: http://localhost:3000/`

**Keep this window open too!**

### Step 8: Open in Browser

Go to: **http://localhost:3000**

---

## 🎉 You're Done!

Now you can:
- ✅ Fill in your resume
- ✅ Preview your resume
- ✅ Get AI suggestions
- ✅ Export as PDF

---

## 🐛 Still Not Working?

### Problem: "npm is not recognized"
**Solution:** Install Node.js from https://nodejs.org/

### Problem: "Execution policy error"
**Solution:** Run PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Problem: "MongoDB connection error"
**Solution Options:**
1. Install MongoDB locally, OR
2. Use MongoDB Atlas (cloud) - recommended and easier!

### Problem: "OpenAI API error"
**Solution:**
- Check your API key in `backend\.env`
- Make sure it starts with `sk-`
- Get a new key from https://platform.openai.com/api-keys

### Problem: "Port 3000 already in use"
**Solution:** 
- Close other apps using port 3000
- Or change the port in `frontend/vite.config.js`

### Problem: "Port 5000 already in use"
**Solution:**
- Close other apps using port 5000
- Or change PORT in `backend\.env`

---

## 📞 Need More Help?

1. Make sure Node.js is installed: `node --version`
2. Make sure MongoDB is running or Atlas is accessible
3. Check your .env file exists with correct values
4. Make sure both servers are running

---

## 🚀 Quick Start (After Setup)

**To start the app later:**

1. Open terminal 1: `cd backend` → `npm start`
2. Open terminal 2: `cd frontend` → `npm run dev`
3. Open browser: http://localhost:3000

Good luck! 🎓

