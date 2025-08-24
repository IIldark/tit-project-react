# Deploying React App to Vercel

This guide explains how to deploy your React app with client-side routing, Tailwind CSS, and framer-motion to Vercel using GitHub integration.

## Steps

1. **Create a Vercel Account**
   - Visit [https://vercel.com/signup](https://vercel.com/signup)
   - Sign up using your GitHub account for seamless integration.

2. **Import Your GitHub Repository**
   - After logging in, click on **New Project**.
   - Select your repository (e.g., `tit-project-react`) from GitHub.
   - Vercel will auto-detect the framework (React with Vite).
   - Confirm the build settings:
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Configure Environment Variables (if any)**
   - For your current setup, no additional environment variables are required.

4. **Deploy the Project**
   - Click **Deploy**.
   - Vercel will build and deploy your app.
   - You will receive a live URL to access your deployed React app.

## Notes

- Vercel supports client-side routing out of the box.
- Tailwind CSS and framer-motion are fully supported as part of the build process.

---

Follow these steps to get your React app deployed quickly and easily on Vercel.
