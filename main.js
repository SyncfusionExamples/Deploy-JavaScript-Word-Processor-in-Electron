const {  BrowserWindow, app} = require('electron');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
function createWindow () {
    const win = new BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
});

win.loadFile('index.html');
}


app.whenReady().then(createWindow)