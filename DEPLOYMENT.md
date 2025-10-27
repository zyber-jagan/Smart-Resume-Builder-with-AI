# 🚀 Deployment Guide - Smart Resume Builder

This guide will help you deploy the Smart Resume Builder to a live website.

---

## 📋 Prerequisites

1. **GitHub Account** (for Git repository)
2. **MongoDB Atlas Account** (free tier) - https://www.mongodb.com/cloud/atlas
3. **OpenAI API Key** - https://platform.openai.com/api-keys
4. **Deployment Platform** (choose one):
   - Vercel (recommended - easiest)
   - Netlify
   - Render
   - Railway

---

## 🎯 Deployment Options

### Option 1: Deploy to Vercel (Recommended)

Vercel is perfect for this project because it can host both frontend and backend.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/resume-builder.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "Add New Project"
   - Import your repository
   - Configure settings:
     - Root Directory: `.` (leave default)
     - Framework Preset: Leave auto-detect
     - Build Command: `cd frontend && npm run build`
     - Output Directory: `frontend/dist`

3. **Add Environment Variables in Vercel**
   Go to Project Settings → Environment Variables:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/resume_builder
   OPENAI_API_KEY=sk-your-actual-key
   VITE_API_URL=https://your-app.vercel.app
   NODE_ENV=production
   ```

4. **Deploy Backend as Separate Service** (if needed)
   - Go to your backend code
   - Deploy as Vercel serverless functions OR
   - Deploy to Railway/Render separately

### Option 2: Deploy to Netlify + Railway

Separate frontend and backend deployment.

#### Frontend (Netlify):

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repo
   - Configure:
     - Base directory: `frontend`
     - Build command: `npm run build`
     - Publish directory: `frontend/dist`

3. **Add Environment Variables**
   In Netlify → Site settings → Environment variables:
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```

#### Backend (Railway):

1. **Go to Railway**
   - Visit https://railway.app
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**
   - Root Directory: `backend`
   - Add environment variables:
     ```
     PORT=5000
     MONGODB_URI=your-mongodb-connection-string
     OPENAI_API_KEY=your-openai-key
     ```

---

## 🗄️ MongoDB Atlas Setup

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free

2. **Create Cluster**
   - Click "Build a Database"
   - Select FREE tier (M0)
   - Choose any region
   - Click "Create"

3. **Create Database User**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Choose "Password"
   - Create username and password
   - Save credentials

4. **Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Or add specific IPs for production

5. **Get Connection String**
   - Go to "Database"
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your actual password
   - Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/resume_builder?retryWrites=true&w=majority`

---

## 🤖 OpenAI API Setup

1. **Get API Key**
   - Go to https://platform.openai.com/api-keys
   - Sign up or log in
   - Click "Create new secret key"
   - Copy the key (starts with `sk-`)

2. **Add Credits**
   - Go to https://platform.openai.com/account/billing
   - Add payment method and credits
   - Free tier available for new users

---

## 🔧 Environment Variables

### Frontend (.env.local or Vercel Environment Variables):
```
VITE_API_URL=https://your-backend-url.com
```

### Backend (.env or Platform Environment Variables):
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/resume_builder
OPENAI_API_KEY=sk-your-actual-key-here
NODE_ENV=production
```

---

## 📝 Git Setup

### Initialize Git Repository:

```bash
# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Smart Resume Builder"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/resume-builder.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### .gitignore is already configured to ignore:
- node_modules/
- .env files
- dist/
- build/
- logs
- etc.

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Frontend loads at your domain
- [ ] Can create and save resume
- [ ] Can preview resume
- [ ] Can generate PDF
- [ ] AI suggestions work
- [ ] MongoDB connection successful
- [ ] Environment variables set correctly

---

## 🐛 Troubleshooting

### "Cannot connect to backend"
- Check CORS is enabled in backend
- Verify environment variables are set
- Check API URL is correct

### "OpenAI API error"
- Verify API key is correct
- Check you have credits
- Ensure key starts with `sk-`

### "MongoDB connection error"
- Verify connection string
- Check IP whitelist in Atlas
- Verify username/password are correct

### "Build failed"
- Check Node.js version (should be 16+)
- Verify all dependencies installed
- Check for any TypeScript errors

---

## 🔗 Deployment Platforms Comparison

| Platform | Frontend | Backend | Free Tier | Difficulty |
|----------|----------|---------|-----------|------------|
| Vercel | ✅ | ✅ | Yes | Easy |
| Netlify | ✅ | ❌ | Yes | Medium |
| Railway | ❌ | ✅ | Limited | Medium |
| Render | ✅ | ✅ | Yes | Medium |

**Recommendation:** Use **Vercel** for easiest deployment.

---

## 📞 Need Help?

Check the platform documentation:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Railway: https://docs.railway.app
- MongoDB Atlas: https://docs.atlas.mongodb.com

---

## 🎉 Success!

Once deployed, share your live resume builder with:
- Your portfolio
- Social media
- GitHub profile

Happy deploying! 🚀

