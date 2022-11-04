const { contextBridge, ipcRenderer } = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
// - [contextBridge](https://www.electronjs.org/docs/latest/api/context-bridge)
// - [ipcRenderer](https://www.electronjs.org/docs/latest/api/ipc-renderer)
contextBridge.exposeInMainWorld(
    "api", {
        closeWindow: () => { // When window.api.closeWindow() is called, send "closeWindow" event to ipcMain
            ipcRenderer.send('closeWindow');
        },
        minimizeWindow: () => { // When window.api.closeWindow() is called, send "minimizeWindow" event to ipcMain
            ipcRenderer.send('minimizeWindow');
        },
        maximizeWindow: () => { // When window.api.closeWindow() is called, send "maximizeWindow" event to ipcMain
            ipcRenderer.send('maximizeWindow');
        }
    }
);