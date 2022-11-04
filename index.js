const { app, BrowserWindow, ipcMain } = require("electron"); // Import app, BrowserWindow, ipcMain from electron module
const path = require("path"); // Import path module
const fs = require("fs"); // Import file system module

let win; // Global variable to store main window

/**
 * Creates the main browser window
 */
async function CreateWindow()
{
	// Create the browser window
	win = new BrowserWindow({
		frame: false, // remove the window frame
		show: false, // hide the window
		webPreferences: {
	        nodeIntegration: false, // is default value after Electron v5
			contextIsolation: true, // protect against prototype pollution - (https://www.electronjs.org/docs/latest/tutorial/context-isolation)
			enableRemoteModule: false, // turn off remote - (https://www.npmjs.com/package/@electron/remote) 
			                           //                 - Note this may have changed for newer electron versions (https://stackoverflow.com/questions/69059668/enableremotemodule-is-missing-from-electron-v14-typescript-type-definitions)
			preload: path.join(__dirname, "preload.js") // use a preload script
	    }
	});
	win.maximize(); // maximize the window
	win.show(); // show the window

	win.loadFile(path.join(__dirname, "index.html")); // load the main page
}

/**
 * This is an example function with an example comment following (https://google.github.io/styleguide/jsguide.html)
 * In particular, (https://google.github.io/styleguide/jsguide.html#features-functions)
 * @param {object} param - some parameter that means something
 * @param {int} otherParam - some other parameter that means something
 * @return {string} some return value that means something
 */
function doSomething(param, otherParam)
{
	return "so string";
}

app.on("ready", CreateWindow); // call createWindow function on "ready" event from app
app.on("window-all-closed", function(){ // quit app on "window-all-closed" event from app
    if(process.platform !== 'darwin'){ // If the platform is darwin (https://en.wikipedia.org/wiki/Darwin_(operating_system)) then call app.quit() to finalize
        app.quit();
    }
});

//Title bar controls
//- https://www.electronjs.org/docs/latest/api/ipc-main

ipcMain.on("closeWindow", () => { // when ipcMain recieves "closeWindow" event close the window
    win.close();
});
ipcMain.on("maximizeWindow", () => { // when ipcMain recieves "maximizeWindow" event maximize / unmaximize the window
    win.isMaximized() ? win.unmaximize() : win.maximize();
});
ipcMain.on("minimizeWindow", () => { // when ipcMain recieves "minimizeWindow" event minimize the window
    win.minimize();
});