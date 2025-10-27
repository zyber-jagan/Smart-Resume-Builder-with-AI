# Setup Instructions - Smart Resume Builder

## Quick Setup (5 minutes)

### Prerequisites
- ✅ Node.js (v16+) installed
- ✅ MongoDB installed OR MongoDB Atlas account
- ✅ OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

---

## Step-by-Step Installation

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

This installs:
- express (web framework)
- mongoose (MongoDB ODM)
- cors (cross-origin requests)
- dotenv (environment variables)
- openai (AI integration)
- puppeteer (PDF generation)

### 2. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

This installs:
- react & react-dom
- axios (HTTP client)
- vite (build tool)
- tailwindcss (styling)
- postcss & autoprefixer

### 3. Configure Environment Variables

Create `backend/.env` file:

```bash
cd ../backend
# Copy the example file
cp environment.example .env
```

Edit `backend/.env`:

**For Local MongoDB:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/resume_builder
OPENAI_API_KEY=sk-your-actual-openai-key-here
```

**For MongoDB Atlas (Cloud):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/resume_builder
OPENAI_API_KEY=sk-your-actual-openai-key-here
```

### 4. Start MongoDB

**Option A: Local MongoDB**
```bash
# Windows
mongod

# macOS/Linux
sudo mongod
```

**Option B: MongoDB Atlas (Cloud)**
- Sign up at https://www.mongodb.com/cloud/atlas
- Create a free cluster (M0 - Free tier)
- Get your connection string
- No local installation needed!

### 5. Start the Backend Server

```bash
cd backend
npm start
```

You should see:
```
Server running on port 5000
MongoDB Connected
```

### 6. Start the Frontend Server

Open a **new terminal window**:

```bash
cd frontend
npm run dev
```

You should see:
```
VITE v5.x.x ready in xxx ms
➜  Local:   http://localhost:3000/
```

### 7. Open the Application

Open your browser and visit:
**http://localhost:3000**

---

## Verification Checklist

✅ Backend running on port 5000
✅ Frontend running on port 3000
✅ MongoDB running (local or Atlas)
✅ .env file configured
✅ OpenAI API key set
✅ All dependencies installed

---

## Troubleshooting

### "Cannot find module" errors
```bash
# Reinstall dependencies
cd backend && npm install
cd ../frontend && npm install
```

### MongoDB connection error
- Check if MongoDB is running: `mongosh`
- Verify your connection string in .env
- Check firewall/network settings

### OpenAI API errors
- Verify your API key is correct
- Check you have credits on OpenAI account
- Key should start with `sk-`

### Port already in use
- Change PORT in backend/.env
- Update VITE port in frontend/vite.config.js

### Puppeteer installation issues
- Run: `cd backend && npm install puppeteer --force`
- Or set PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

---

## Development Mode

For auto-reload during development:

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
Auto-reloads by default when running `npm run dev`

---

## Testing the Application

1. Go to http://localhost:3000
2. Click "Build Resume" tab
3. Fill in your information
4. Click "Save Resume" button
5. Click "Preview" tab to see your resume
6. Click "AI Suggestions" tab
7. Click "Get AI Suggestions" button
8. Test PDF export from Preview tab

---

## Next Steps

- Read the [README.md](README.md) for detailed documentation
- Check [FEATURES.md](FEATURES.md) for all features
- Review [QUICKSTART.md](QUICKSTART.md) for quick reference

---

## Need Help?

1. Check the console for error messages
2. Verify all services are running
3. Check .env file configuration
4. Review MongoDB connection
5. Verify OpenAI API key

---

Happy Resume Building! 🚀

