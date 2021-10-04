const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require("fs");

let win;

async function createWindow()
{
	// Create the browser window
	win = new BrowserWindow({
		frame: false,
		show: false,
		webPreferences: {
	        nodeIntegration: false, // is default value after Electron v5
			contextIsolation: true, // protect against prototype pollution
			enableRemoteModule: false, // turn off remote
			preload: path.join(__dirname, "preload.js") // use a preload script
	    }
	});
	win.maximize();
	win.show();

	win.loadFile(path.join(__dirname, "index.html"));
}

app.on("ready", createWindow);
app.on('window-all-closed', function(){
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

//Title bar controls
ipcMain.on('closeWindow', () => {
    win.close();
});
ipcMain.on('maximizeWindow', () => {
    win.isMaximized() ? win.unmaximize() : win.maximize();
});
ipcMain.on('minimizeWindow', () => {
    win.minimize();
});