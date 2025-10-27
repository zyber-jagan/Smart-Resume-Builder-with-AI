# ⚡ Quick Deploy - 10 Minutes to Live!

## 🎯 Easiest Deployment Path

### Step 1: Prepare Your Code (2 minutes)

1. **Open Terminal** in your project folder
2. **Initialize Git** (if not done):
   ```bash
   git init
   git add .
   git commit -m "Ready to deploy"
   ```

### Step 2: Push to GitHub (3 minutes)

1. **Create GitHub Repository**
   - Go to https://github.com
   - Click "New repository"
   - Name it `resume-builder`
   - Click "Create repository"

2. **Push your code**:
   ```bash
   git remote add origin https://github.com/yourusername/resume-builder.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Setup MongoDB (2 minutes)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up (FREE)
3. Create a free cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Create a user (username/password)

### Step 4: Get OpenAI Key (1 minute)

1. Go to https://platform.openai.com/api-keys
2. Sign up
3. Create new API key
4. Copy the key (starts with `sk-`)

### Step 5: Deploy to Vercel (2 minutes)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your `resume-builder` repository
5. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `frontend/dist`

6. **Add Environment Variables:**
   - `VITE_API_URL` = your vercel app URL (auto-filled, edit if needed)
   - `MONGODB_URI` = your MongoDB Atlas connection string
   - `OPENAI_API_KEY` = your OpenAI API key

7. Click "Deploy"

---

## ✅ Done!

Your app will be live at: `https://your-app.vercel.app`

**Next Steps:**
1. Deploy backend separately to Railway or Render
2. Update `VITE_API_URL` in Vercel environment variables
3. Test your live app!

---

## 🚨 Important Notes

- Backend needs to be deployed separately (Vercel frontend only)
- Use Railway/Render for backend deployment
- OR use Vercel serverless functions (advanced)

---

## 📚 Full Deployment Guide

For detailed instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

Need help? Check the README.md for troubleshooting!

