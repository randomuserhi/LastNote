const { contextBridge, ipcRenderer } = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "api", {
        closeWindow: () => {
            ipcRenderer.send('closeWindow');
        },
        minimizeWindow: () => {
            ipcRenderer.send('minimizeWindow');
        },
        maximizeWindow: () => {
            ipcRenderer.send('maximizeWindow');
        }
    }
);