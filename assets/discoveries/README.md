# Hidden Discovery Assets

This folder contains the visual assets for hidden discoveries in each terrain preset.

## Adding Your Images

Place PNG images here with the following names for each discovery:

### File Names
- `ancient_tree.png` - Ancient tree for the Ancient Forest preset
- `stone_pile.png` - Stone pile for the Forgotten Farm preset
- `cave_entrance.png` - Cave entrance for the Cavern Entrance preset
- `grave_stones.png` - Weathered headstones for the Abandoned Graveyard preset
- `railway_tracks.png` - Old railway tracks for the Rails Through Time preset

### Image Guidelines

**Recommended Specifications:**
- **Format:** PNG (supports transparency)
- **Size:** 80x80 pixels (will be scaled as needed)
- **Transparency:** Use PNG alpha channel for transparent backgrounds
- **Style:** Weathered, historical, nature-themed to match WV heritage

### Example File Structure
```
assets/
└── discoveries/
    ├── README.md
    ├── ancient_tree.png
    ├── stone_pile.png
    ├── cave_entrance.png
    ├── grave_stones.png
    └── railway_tracks.png
```

### How It Works

The app automatically:
1. Looks for these image files when the page loads
2. Uses the image if found (✅ loaded)
3. Falls back to canvas-drawn artwork if image is missing (⚠️ fallback)

Check the browser console for messages like:
- `✅ Loaded ancientTree image`
- `⚠️ Could not load ancientTree image - will use canvas fallback`

### Tips

- Keep file sizes small (optimize with TinyPNG or similar)
- Use simple, clear designs that work at small sizes
- Test with the app to ensure they look good at 80x80 pixels
- Can use GIMP, Photoshop, online tools, or AI image generators

You can replace images anytime - just refresh the page for changes to take effect!
