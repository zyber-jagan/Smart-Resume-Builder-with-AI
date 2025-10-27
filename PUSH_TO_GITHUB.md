# 🚀 Push to GitHub & Make it Live!

## Quick Start - 5 Minutes

### Step 1: Update Repository Name

**IMPORTANT:** Update this in `frontend/vite.config.js`:
```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

Replace `YOUR-REPO-NAME` with your actual GitHub repository name (e.g., `resume-builder` or `smart-resume`).

### Step 2: Push to GitHub

```powershell
# Initialize Git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Smart Resume Builder"

# Create repository on GitHub first at https://github.com/new
# Then push:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**: Select **GitHub Actions**
5. Click **Save**

### Step 4: Deploy Backend

GitHub Pages only serves static files. Deploy backend separately:

**Option A: Render.com (Easiest)**

1. Go to https://render.com
2. Sign up with GitHub
3. Click **New +** → **Web Service**
4. Connect your repository
5. Set:
   - **Name:** resume-backend
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Add Environment Variables:
   ```
   MONGODB_URI=your-mongodb-connection
   OPENAI_API_KEY=your-openai-key
   ```
7. Click **Create Web Service**
8. Copy your URL (e.g., `https://resume-backend.onrender.com`)

### Step 5: Update Frontend API URL

1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
3. Add:
   - **Name:** `VITE_API_URL`
   - **Value:** Your backend URL from Step 4
4. Go to **Actions** tab → **Re-run all jobs**

### Step 6: Access Your Live Site!

Your app is now at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## ✅ Checklist

- [ ] Updated repository name in `vite.config.js`
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages
- [ ] Deployed backend to Render/Railway
- [ ] Added `VITE_API_URL` secret
- [ ] Tested live site
- [ ] Updated README with your URL

## 🐛 Troubleshooting

### "404 Not Found"
- Check repository name in `vite.config.js` matches GitHub repo name
- Wait 2-3 minutes for deployment
- Check Actions tab for errors

### "Cannot connect to backend"
- Verify `VITE_API_URL` secret is set
- Check backend is running
- Test backend URL in browser

### Deployment takes time
- First deployment can take 5-10 minutes
- Check the Actions tab for progress

## 📚 Need More Help?

- Full deployment guide: [DEPLOY_GITHUB_PAGES.md](DEPLOY_GITHUB_PAGES.md)
- General deployment: [DEPLOYMENT.md](DEPLOYMENT.md)
- Local setup: [START_HERE.md](START_HERE.md)

---

## 🎉 Success!

Your resume builder is now live! Share it with:
- ✅ Your portfolio
- ✅ LinkedIn
- ✅ GitHub profile

Happy building! 🚀

