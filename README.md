# Media Tracker

A desktop application for tracking your video and audio watching progress. Built with Electron and vanilla JavaScript.

## Features

- **Project Management** — Organize media files into projects with folder linking or manual file selection
- **Progress Tracking** — Automatically saves your watching position. Resume exactly where you left off
- **Video & Audio Player** — Built-in player with playback speed control, subtitles, and picture-in-picture
- **Subtitle Support** — Auto-detects SRT, VTT, ASS, SSA, and SUB subtitle files with language detection
- **Streaming Links** — Add online video URLs for streaming directly in the app
- **Dashboard** — View total duration, watched time, remaining time, and overall progress
- **Multi-Select** — Ctrl+Click and Shift+Click for batch operations on files
- **Drag & Drop** — Reorder files manually by dragging, or drop files/folders into the app
- **Keyboard Shortcuts** — Space (play/pause), Arrow keys (seek/volume), F (fullscreen), N/P (next/prev), C (cycle subtitles)

## Supported Formats

| Type | Extensions |
|------|-----------|
| Video | MP4, MKV, AVI, MOV, WebM, FLV, WMV, M4V |
| Audio | MP3, WAV, FLAC, AAC, OGG, WMA, M4A |
| Subtitles | SRT, VTT, ASS, SSA, SUB |

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm

### Setup

```bash
git clone https://github.com/aidin-ghazagh/media-tracker.git
cd media-tracker
npm install
```

### Run

```bash
npm start
```

### Build

```bash
npm run build
```

This creates a distributable in the `dist/` folder.

## Usage

1. Launch the app — a default project is created automatically
2. Click **Link Folder** to connect a media directory, or use **Add Files** to select individual files
3. Use **Add Link** to paste streaming URLs
4. Click any file to start playing — your progress is saved automatically
5. Use the sort dropdown to organize files by name, progress, last watched, or date added
6. Switch to **Manual Order** to drag files into your preferred arrangement

## Tech Stack

- **Electron** — Desktop application framework
- **Vanilla JavaScript** — No frameworks, no dependencies
- **localStorage** — Project and progress persistence
- **File System** — Native file access via Node.js

## License

MIT
