const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
//const url = require('url');
//const isDev = require('electron-is-dev');
const { ipcMain, shell } = require('electron');
var fs = require("fs");
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 350,
        height: 700,
        minHeight: 700,
        minWidth: 350,
        icon: path.join(__dirname, '/twitchchat.png'),
        webPreferences: {
            nodeIntegration: true,
            devTools: false
        }
    });
    mainWindow.setOverlayIcon(`${path.join(__dirname, '/twitchchat.png')}`, 'Twitch Chat')
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadURL(/*isDev ? "http://localhost:3000" : */`file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});