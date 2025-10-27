# 🚀 Deploy to GitHub Pages - Complete Guide

## Step 1: Initialize Git and Push to GitHub

Open PowerShell in your project folder and run:

```powershell
# Initialize Git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Smart Resume Builder"

# Create repository on GitHub first, then:
git remote add origin https://github.com/yourusername/resume-project.git
git branch -M main
git push -u origin main
```

## Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings**
3. Scroll down to **Pages**
4. Under **Source**, select **GitHub Actions**
5. Save the settings

## Step 3: Add Environment Variables

1. In your GitHub repository, go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add these secrets:

```
Name: VITE_API_URL
Value: https://your-backend-url.com
```

If you don't have a backend yet, leave it as the default or set it up later.

## Step 4: Deploy Backend Separately

GitHub Pages only hosts static files. You need to deploy the backend separately:

### Option A: Use Render (Free & Easy)

1. Go to https://render.com
2. Sign up with GitHub
3. Click **New** → **Web Service**
4. Connect your repository
5. Configure:
   - **Name:** resume-builder-backend
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Add Environment Variables:
   ```
   MONGODB_URI=your-mongodb-connection-string
   OPENAI_API_KEY=your-openai-api-key
   PORT=5000
   ```
7. Click **Create Web Service**
8. Copy the URL (e.g., `https://resume-builder-backend.onrender.com`)

### Option B: Use Railway (Free Tier)

1. Go to https://railway.app
2. Sign up with GitHub
3. Click **New Project** → **Deploy from GitHub**
4. Select your repository
5. Configure:
   - **Root Directory:** `backend`
   - Set environment variables:
     - `MONGODB_URI`
     - `OPENAI_API_KEY`
     - `PORT=5000`

### Option C: Use Heroku

1. Go to https://heroku.com
2. Install Heroku CLI
3. Run:
   ```bash
   cd backend
   heroku create resume-builder-backend
   heroku config:set MONGODB_URI=your-connection-string
   heroku config:set OPENAI_API_KEY=your-key
   git push heroku main
   ```

## Step 5: Update Frontend to Use Backend URL

Once your backend is deployed:

1. Go to your GitHub repository
2. Go to **Settings** → **Secrets** → **Actions**
3. Update `VITE_API_URL` with your backend URL
4. Go to **Actions** tab
5. Click **Re-run all jobs** to redeploy

## Step 6: Access Your Live App

Your app will be available at:
```
https://yourusername.github.io/resume-project/
```

**Note:** Replace `/resume-project` with your actual repository name!

## ✅ Testing Your Deployed App

1. ✅ Open https://yourusername.github.io/resume-project/
2. ✅ Fill in resume information
3. ✅ Test AI suggestions (requires backend)
4. ✅ Export PDF (requires backend)
5. ✅ Save resume (requires backend)

## 🔧 Troubleshooting

### "Page not found"
- Check repository name matches in `vite.config.js` (base path)
- Wait a few minutes for deployment to complete

### "Cannot connect to backend"
- Verify `VITE_API_URL` secret is set correctly
- Check backend is deployed and running
- Test backend URL directly in browser

### "Build failed"
- Check GitHub Actions logs
- Verify all environment variables are set
- Check for syntax errors in code

### Environment Variables Not Working

Edit `frontend/.env.production`:
```
VITE_API_URL=https://your-backend-url.com
```

Then commit and push:
```bash
git add .
git commit -m "Update API URL"
git push
```

## 📝 Quick Summary

1. **Push code to GitHub**
2. **Enable GitHub Pages in Settings**
3. **Deploy backend to Render/Railway/Heroku**
4. **Set VITE_API_URL secret with backend URL**
5. **Access your live app!**

## 🎉 Success!

Your Smart Resume Builder is now live! Share it:
- Add to your portfolio
- Share on LinkedIn
- Showcase on GitHub

---

**Need help?** Check the main [DEPLOYMENT.md](DEPLOYMENT.md) file for more details!

