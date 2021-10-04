//Main process

const {BrowserWindow, app} = require('electron');
const url = require('url');

function boot() 
{
	win = new BrowserWindow({
		frame: false,
		
	});
	win.loadURL(url.format({
		pathname: 'index.html',
		slashes: true
	}));
}

app.on('ready', boot);