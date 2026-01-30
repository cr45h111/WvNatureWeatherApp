# 🌲 WV Nature & Weather

An immersive West Virginia nature simulation with real-time weather, astronomy, and interactive ecosystem. Experience the beauty of Appalachian landscapes with dynamic seasons, authentic flora & fauna, and live weather integration.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Platform: Web & Desktop](https://img.shields.io/badge/Platform-Web%20%7C%20Desktop%20%7C%20Mobile-blue.svg)
![Status: Active](https://img.shields.io/badge/Status-Active-brightgreen.svg)

## ✨ Features

- **🌍 Real-Time Weather Integration** - Live weather data from Open-Meteo API for accurate atmospheric conditions
- **🌙 Astronomy & Celestial Mechanics** - Accurate moon phases, star positions, and celestial events
- **🌳 Seasonal Ecosystems** - Dynamic seasonal changes with authentic West Virginia flora and fauna
- **🦌 Interactive Wildlife** - 50+ bird species and animal behavior patterns with detailed field guides
- **🌱 Plant Health System** - Manage and grow over 20 native West Virginia plant species
- **⏰ Adaptive Clock** - Synchronized in-game time with real-world circadian cycles
- **🎵 Immersive Audio** - Ambient soundscapes with species-specific audio cues
- **📱 Cross-Platform** - Web, Electron desktop, and mobile (iOS/Android via Capacitor)
- **🎯 Progressive Web App** - Install as app on any platform with offline support
- **🔔 Seasonal Alerts** - Educational notifications about native species and seasonal events

## 🚀 Quick Start

### Web Browser
```bash
npm install
npm start
```
Open `http://localhost:3000` in your browser.

### Desktop (Electron)
```bash
npm install
npm run electron
```

### Mobile (Capacitor)
```bash
npm install
npx cap init
npx cap add ios    # macOS only
npx cap add android
npx cap sync
npx cap open ios   # or 'android'
```

See [README-MOBILE.md](README-MOBILE.md) for detailed mobile setup.

## 📋 System Requirements

**Web/PWA:**
- Modern browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- ~100MB disk space

**Desktop:**
- Windows 10+ / macOS 10.15+ / Linux
- 500MB RAM minimum
- 200MB disk space

**Mobile:**
- iOS 13.0+ or Android 6.0+
- 150MB free storage

## 🎮 How to Play

1. **Explore** - Wander through the West Virginia landscape
2. **Learn** - Use the bird guide and plant guide to identify species
3. **Manage** - Maintain plant health and encourage wildlife visits
4. **Track** - Monitor real-time weather and astronomical events
5. **Relax** - Enjoy ambient nature sounds and scenic views

### Controls
- **Mouse/Touch** - Look around (click and drag)
- **Keyboard Navigation** - Move through the scene
- **Info Panel** - Click the info button for current conditions
- **Settings** - Adjust graphics, audio, and simulation speed
- **Store** - Purchase decorative items for your scene

## 📊 Project Status

- ✅ Web version complete and deployable
- ✅ Desktop (Electron) version functional
- 🚀 Mobile versions ready for app store submission
- 📦 All assets optimized for distribution

See [COMPLETION-SUMMARY.md](COMPLETION-SUMMARY.md) for full development history.

## 🛠️ Technology Stack

- **Frontend:** Vanilla JavaScript, HTML5 Canvas, Three.js (WebGL)
- **Backend:** Node.js, Open-Meteo API
- **Desktop:** Electron
- **Mobile:** Capacitor, Ionic
- **PWA:** Service Workers
- **Audio:** Web Audio API

## 📁 Project Structure

```
├── index.html          # Main HTML entry point
├── index.js            # Electron main process
├── sw.js               # Service Worker for PWA
├── manifest.json       # PWA manifest
├── capacitor.config.json  # Capacitor mobile config
├── docs/               # Documentation files
├── WestVirginia game data/  # Game assets & data
└── dist/               # Built distribution files
```

## 🌐 Live Demo

- **Web:** [WV Nature & Weather](https://wvnature.vercel.app)
- **Desktop:** Available in releases
- **Mobile:** Coming soon to App Store & Google Play

## 📖 Documentation

- [Quick Start Guide](QUICK-START.md)
- [Setup Instructions](SETUP-INSTRUCTIONS.md)
- [Mobile Distribution Guide](README-MOBILE.md)
- [Distribution Checklist](DISTRIBUTION-CHECKLIST.md)

## 🤝 Contributing

This is an educational and relaxation-focused project. Contributions welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Chris Fisher** - Creator and Developer

## 🙏 Acknowledgments

- Open-Meteo for real-time weather data
- West Virginia native species information from WV DNR
- Three.js community for WebGL support
- Capacitor team for cross-platform mobile support

## 📧 Contact & Support

- 🐛 Found a bug? Open an issue on GitHub
- 💡 Have a feature idea? Suggest it in discussions
- 🎓 Need help? Check the documentation

---

⭐ If you enjoy this project, please consider leaving a star on GitHub!

Made with 🌲 for West Virginia nature lovers
