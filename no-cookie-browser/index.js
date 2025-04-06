const { app, BrowserWindow } = require('electron');

let win;

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: __dirname + '/preload.js', // Preload script
            webviewTag: true, // Enable WebView
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    // Set a custom User-Agent to bypass Google blocking Electron
    win.webContents.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");

    win.loadFile('index.html'); // Load the frontend (index.html)
});
