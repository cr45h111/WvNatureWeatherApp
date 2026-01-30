# WV Nature & Weather - Mobile Distribution Guide

This guide covers setting up your app for iOS and Android app stores.

## Prerequisites

### For Android:
- Android Studio (latest)
- JDK 11 or higher
- Android SDK 34+
- Google Play Developer Account ($25 one-time)

### For iOS:
- macOS 12+
- Xcode 14+
- Apple Developer Account ($99/year)
- iOS 13.0+

## Setup Steps

### 1. Install Capacitor Globally
```bash
npm install -g @capacitor/cli
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Add Capacitor to Project
```bash
npx cap init
```
When prompted, use:
- App name: `WV Nature & Weather`
- App ID: `com.wvnature.app`
- Directory: `.` (current directory)

### 4. Add Platforms
```bash
# For Android
npx cap add android

# For iOS (macOS only)
npx cap add ios
```

### 5. Sync Assets
```bash
npx cap sync
```

## Building for Android

### 1. Open in Android Studio
```bash
npx cap open android
```

### 2. Build APK/Bundle
- Menu: Build → Build Bundle(s) / Generate Signed Bundle(s)
- Create a keystore (if you don't have one)
- Follow the signed bundle wizard

### 3. Test on Device
```bash
npx cap run android
```

### 4. Prepare for Play Store
- Build Release APK signed with your keystore
- Create Google Play Store listing
- Upload APK/Bundle with:
  - Screenshots (2-8 per language)
  - Description (80 characters max)
  - Short description (30 characters)
  - Icons (512x512)
  - Content rating questionnaire

## Building for iOS

### 1. Open in Xcode
```bash
npx cap open ios
```

### 2. Build for Device
- Select your development team
- Connect device via USB
- Product → Build

### 3. Build for Distribution
- Menu: Product → Archive
- Choose distribution method:
  - App Store Connect (recommended)
  - Ad Hoc (testing)
  - Enterprise

### 4. Prepare for App Store
- Create App Store Connect app listing
- Upload build via Xcode Organizer
- Submit with:
  - Screenshots (6.5", 5.5" phone + iPad)
  - Description (4000 characters max)
  - Keywords (100 characters)
  - Support URL
  - Privacy policy URL
  - Category: Utilities or Lifestyle
  - Ratings: Indicate content types
  - Age rating: 4+

## Icons and Assets

### Required Icon Sizes:
- **192x192** - Android home screen
- **512x512** - Android Play Store & iOS
- **Icon-maskable (512x512)** - Android adaptive icon

**Place these in root directory:**
- `icon-192.png`
- `icon-512.png`
- `icon-512-maskable.png` (same as 512 but with safe zone)

### Screenshots:
- `screenshot-1.png` (540x720) - Mobile narrow format
- `screenshot-2.png` (1280x720) - Tablet wide format

## App Store Requirements

### Android Play Store:
✅ Privacy policy (required)
✅ Content rating (IARC)
✅ Minimum 2 screenshots
✅ Category selected
✅ Signed APK/Bundle

### iOS App Store:
✅ Privacy policy
✅ IDFA consent (if applicable)
✅ Age rating
✅ Compliance info (encryption, etc.)
✅ Screenshots for all supported sizes
✅ Minimum 1.2 MB app size (yours is fine)

## Privacy & Compliance

### Your App's Privacy Claims:
- ✅ No user data collected remotely
- ✅ Location stays on-device
- ✅ Weather data from public API
- ✅ LocalStorage only (browser storage)

### Privacy Policy Template:
Include in your store listing:
```
WV Nature & Weather does not collect, transmit, or store 
personal user data. All location services remain on-device. 
Weather data is fetched from public sources. User plants and 
scenes are stored locally on the device.
```

## Testing Before Submission

### Android:
```bash
npx cap run android
```

### iOS:
```bash
npx cap run ios
```

Test on actual device (simulator may not test all features).

## Building Desktop (Electron)

Keep using existing setup:
```bash
npm start  # Start with Electron
npm run build  # Build installer
```

## Next Steps

1. **Create app icons** (192x512px minimum)
2. **Create screenshots** for app stores
3. **Write store listing copy** (description, keywords)
4. **Create privacy policy**
5. **Set up developer accounts** (Google, Apple)
6. **Test thoroughly** on real devices
7. **Submit to stores**

## Troubleshooting

### Build fails on Android:
- Check Android SDK is installed: `npx cap doctor`
- Update gradle: `./gradlew wrapper --gradle-version=8.0`

### iOS build errors:
- Update Xcode: `xcode-select --install`
- Pod update: `cd ios/App && pod install`

### App crashes after install:
- Check manifest.json paths are correct
- Verify all icons exist
- Test on multiple devices

## Useful Commands

```bash
# Check environment setup
npx cap doctor

# Sync code changes
npx cap sync

# Update Capacitor
npm update @capacitor/*

# View logs on device
npx cap run android --tail  # Android
npx cap run ios --tail      # iOS
```

## Support

- Capacitor Docs: https://capacitorjs.com/docs
- Android Play Console: https://play.google.com/console
- Apple App Store Connect: https://appstoreconnect.apple.com
