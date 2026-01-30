# Netlify Deployment Guide for WV Nature & Weather

## Step 1: Create Netlify Account
1. Go to https://netlify.com
2. Click "Sign up"
3. Sign in with GitHub (recommended for easy deployment)
4. Click "Authorize Netlify"

## Step 2: Connect Your Repository
1. In Netlify dashboard, click "New site from Git"
2. Select "GitHub"
3. Search and select `WvNatureWeatherApp`
4. Configure build settings:
   - **Build command:** `npm run build:web`
   - **Publish directory:** `.` (root, since index.html is there)
   - **Node version:** 18 (or latest)

## Step 3: Update package.json
Add this build script to your scripts section:
```json
"build:web": "echo 'Web version is ready to deploy'"
```

This tells Netlify your app is ready to go as-is (no build step needed since you're using vanilla JS).

## Step 4: Deploy
1. Click "Deploy site"
2. Netlify will automatically deploy whenever you push to main
3. Your site will be live at: `https://[your-site-name].netlify.app`
4. You can customize the domain in site settings

## Step 5: Update Your README & Posts
Once deployed, update:
- README.md with your live Netlify URL
- Facebook posts with the Netlify link
- GitHub repo description with the live link

## Automatic Deployments
Every time you push to GitHub, Netlify will automatically redeploy!

### To Deploy Changes:
```bash
git add .
git commit -m "Update feature"
git push origin main
```

Your site updates automatically in ~30 seconds.

## Important Notes

⚠️ **Service Worker Caching:**
- Your service worker (sw.js) may cache old versions
- Users may need to do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Consider adding version checking to sw.js for auto-updates

⚠️ **API Calls:**
- Make sure Open-Meteo API calls work from the browser
- Check browser console (F12) for any CORS errors

⚠️ **File Paths:**
- Ensure all asset paths are relative (not absolute)
- Check that image paths work on the live site

## Testing Live Site
1. Visit your Netlify URL
2. Test all features:
   - Weather loading
   - Astronomy calculations
   - Wildlife/plant interactions
   - Audio playback
   - Responsive on mobile

## Troubleshooting

### Site won't load
- Check browser console (F12) for errors
- Check Netlify deployment logs
- Verify all assets are in the right paths

### Features not working
- May be CORS or API issues
- Check API keys and rate limits
- Verify service worker isn't blocking resources

### Slow loading
- Optimize images in WestVirginia game data/
- Consider lazy loading
- Check Netlify analytics

## Domain Setup (Optional)
If you want a custom domain:
1. Buy domain (GoDaddy, Namecheap, etc.)
2. In Netlify: Domain settings → Add custom domain
3. Follow DNS instructions
4. Free SSL certificate auto-enabled

---

Once deployed, share the live URL everywhere:
- Facebook posts
- GitHub README
- Twitter/X
- Reddit communities
- Indie game sites (itch.io, Indie Hackers)
