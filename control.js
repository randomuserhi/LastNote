// Add "click" event to close-btn element which calls the exposed method .api.closeWindow() from preload.js
document.getElementById("close-btn").addEventListener("click", (e) => {
    window.api.closeWindow();
});
// Add "click" event to max-btn element which calls the exposed method .api.closeWindow() from preload.js
document.getElementById("max-btn").addEventListener("click", (e) => {
    window.api.maximizeWindow();
});
// Add "click" event to min-btn element which calls the exposed method .api.closeWindow() from preload.js
document.getElementById("min-btn").addEventListener("click", (e) => {
    window.api.minimizeWindow();
});