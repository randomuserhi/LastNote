const { contextBridge, ipcRenderer } = require("electron"); // Import contextBridge, ipcRenderer from electron module

// Expose methods to the renderer process such that the
// ipcRenderer can be used without exposing the entire object 
// (which would be dangerous as the render context can then call ipcRenderer methods)
// - [contextBridge](https://www.electronjs.org/docs/latest/api/context-bridge)
// - [ipcRenderer](https://www.electronjs.org/docs/latest/api/ipc-renderer)
contextBridge.exposeInMainWorld(
    "api", {
        closeWindow: () => { // When window.api.closeWindow() is called, send "closeWindow" event to ipcMain
            ipcRenderer.send("closeWindow");
        },
        minimizeWindow: () => { // When window.api.closeWindow() is called, send "minimizeWindow" event to ipcMain
            ipcRenderer.send("minimizeWindow");
        },
        maximizeWindow: () => { // When window.api.closeWindow() is called, send "maximizeWindow" event to ipcMain
            ipcRenderer.send("maximizeWindow");
        }
    }
);