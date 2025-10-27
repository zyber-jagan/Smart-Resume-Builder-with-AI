# 🎯 GET YOUR RESUME BUILDER LIVE - STEP BY STEP

## ⚡ Quick 10-Minute Guide to Deploy to GitHub Pages

### BEFORE YOU START:

1. **MongoDB Atlas Account** (Free)
   - Go to: https://www.mongodb.com/cloud/atlas
   - Sign up and create a cluster
   - Get your connection string

2. **OpenAI API Key** (Free tier available)
   - Go to: https://platform.openai.com/api-keys
   - Create account and generate API key

3. **GitHub Account**
   - You need a GitHub account

---

## 📝 STEP 1: Update Repository Name (IMPORTANT!)

Open file: `frontend/vite.config.js`

Find this line (line 6):
```javascript
base: process.env.NODE_ENV === 'production' ? '/resume-project/' : '/',
```

**Change `resume-project` to YOUR GitHub repository name!**

For example, if your repo will be `smart-resume-builder`, change it to:
```javascript
base: process.env.NODE_ENV === 'production' ? '/smart-resume-builder/' : '/',
```

---

## 🚀 STEP 2: Push to GitHub

Open PowerShell in your project folder:

```powershell
# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Smart Resume Builder - Initial commit"

# Create repository on GitHub first:
# Go to: https://github.com/new
# Create a new repository (name it whatever you want)

# Then push (replace YOUR-USERNAME and YOUR-REPO-NAME):
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

---

## 🌐 STEP 3: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

**Your site will be available at:**
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

---

## ⚙️ STEP 4: Deploy Backend (Required for Full Features)

GitHub Pages only hosts the frontend. You need to deploy backend to Render, Railway, or Heroku.

### OPTION A: Render (Free & Easy) - RECOMMENDED

1. Go to https://render.com
2. Click **Sign Up** → **Continue with GitHub**
3. Click **New +** → **Web Service**
4. Connect your repository
5. Configure:
   - **Name:** `resume-backend`
   - **Environment:** `Node`
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Click **Environment**
7. Add these variables:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/resume_builder
   OPENAI_API_KEY=sk-your-actual-key-here
   PORT=5000
   ```
8. Click **Create Web Service**
9. Wait for deployment (takes 2-5 minutes)
10. Copy the URL (e.g., `https://resume-backend.onrender.com`)

### OPTION B: Railway

1. Go to https://railway.app
2. Sign up with GitHub
3. New Project → Deploy from GitHub
4. Select your repository
5. Add environment variables (same as above)
6. Copy the URL

---

## 🔗 STEP 5: Connect Frontend to Backend

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add:
   - **Name:** `VITE_API_URL`
   - **Value:** Your backend URL from Step 4
5. Click **Add secret**
6. Go to **Actions** tab
7. Click **Re-run all jobs** to redeploy

---

## ✅ STEP 6: Test Your Live App!

Visit: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Test These Features:

- ✅ Fill in resume information
- ✅ Click "Save Resume"
- ✅ View "Preview" tab
- ✅ Click "AI Suggestions" → "Get AI Suggestions"
- ✅ Click "Export as PDF"

**If features don't work:**
- Check backend is deployed and running
- Verify `VITE_API_URL` secret is set correctly
- Check Actions tab for deployment errors

---

## 🎉 SUCCESS! Your App is Live!

Your Smart Resume Builder is now accessible to everyone!

### Update Your README:

Edit `README.md` and update the URL:
```markdown
## ✨ Live Demo

🌐 **Try it now:** [https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/](https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/)
```

Then push:
```powershell
git add README.md
git commit -m "Update live demo URL"
git push
```

---

## 🔧 TROUBLESHOOTING

### "404 Not Found" on GitHub Pages
- Check repository name matches in `vite.config.js`
- Wait 5 minutes for initial deployment
- Check Actions tab for build errors

### "Cannot connect to backend"
- Verify backend URL is correct
- Check backend is running
- Test backend URL in browser directly

### "AI suggestions not working"
- Check OpenAI API key is valid
- Verify you have credits on OpenAI
- Check backend logs for errors

### "PDF export not working"
- Backend must be deployed
- Check browser console for errors
- Verify backend URL in secrets

---

## 📚 Need More Help?

Check these files:
- **Local setup:** `START_HERE.md`
- **Deployment guide:** `DEPLOY_GITHUB_PAGES.md`
- **Full documentation:** `README.md`
- **Features list:** `FEATURES.md`

---

## 🎓 Quick Summary

1. ✅ Update repo name in `vite.config.js`
2. ✅ Push to GitHub
3. ✅ Enable GitHub Pages
4. ✅ Deploy backend to Render
5. ✅ Add `VITE_API_URL` secret
6. ✅ Test your live app!

---

**Your app is now ready to use!** 🚀

Share it on:
- LinkedIn
- Twitter
- Your portfolio
- GitHub profile

Happy building! 🎉

