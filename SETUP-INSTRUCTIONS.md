# MOBILE SETUP - HTML UPDATE NEEDED

Add these meta tags to the <head> section of WvW.html (after the existing viewport meta tag):

```html
<meta name="theme-color" content="#0a1628">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="WV Nature & Weather">
<meta name="application-name" content="WV Nature & Weather">
<meta name="mobile-web-app-capable" content="yes">
<link rel="manifest" href="manifest.json">
<link rel="apple-touch-icon" href="icon-192.png">
```

## Register Service Worker

Add this script at the end of WvW.html, just before the closing </body> tag:

```html
<!-- Service Worker Registration for PWA -->
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(err => {
        console.warn('Service Worker registration failed:', err);
      });
  });
}
</script>
```

## Update package.json

Replace the "dependencies" section (currently empty) with:

```json
"dependencies": {
  "@capacitor/android": "^5.5.0",
  "@capacitor/core": "^5.5.0",
  "@capacitor/ios": "^5.5.0",
  "@capacitor/splash-screen": "^5.5.0",
  "@capacitor/status-bar": "^5.5.0"
},
```

And add these scripts:

```json
"scripts": {
  "start": "electron .",
  "build": "electron-builder",
  "dev": "electron . --enable-logging",
  "cap:init": "npx cap init",
  "cap:add:android": "npx cap add android",
  "cap:add:ios": "npx cap add ios",
  "cap:sync": "npx cap sync",
  "cap:open:android": "npx cap open android",
  "cap:open:ios": "npx cap open ios",
  "cap:run:android": "npx cap run android",
  "cap:run:ios": "npx cap run ios",
  "cap:doctor": "npx cap doctor"
},
```

## Required Assets

Create these icon files in the root directory:

1. **icon-192.png** (192x192) - Android home screen icon
2. **icon-512.png** (512x512) - App store icon
3. **icon-512-maskable.png** (512x512) - Android adaptive icon (safe zone center)
4. **screenshot-1.png** (540x720) - Mobile screenshot
5. **screenshot-2.png** (1280x720) - Tablet screenshot

You can generate these from your existing icon using an online tool or Figma.

## Setup Commands

```bash
# 1. Install dependencies
npm install

# 2. Initialize Capacitor (run once)
npm run cap:init

# 3. Add platforms
npm run cap:add:android
npm run cap:add:ios  # macOS only

# 4. Sync your app
npm run cap:sync

# 5. Open for development
npm run cap:open:android  # or npm run cap:open:ios

# 6. Run on device/emulator
npm run cap:run:android   # or npm run cap:run:ios
```

## Files Created

✅ **manifest.json** - PWA manifest with icons, shortcuts, screenshots
✅ **sw.js** - Service worker for offline support and caching
✅ **capacitor.config.json** - Capacitor configuration
✅ **README-MOBILE.md** - Full distribution guide

## Next Steps

1. Add the HTML meta tags above
2. Add the Service Worker registration script
3. Update package.json as shown
4. Create icon and screenshot assets
5. Run `npm install` to install dependencies
6. Follow README-MOBILE.md for build & distribution steps
