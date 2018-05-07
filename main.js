const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function crtWindow() {
   win = new BrowserWindow({
     width: 800, height: 600
   })
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'login.html'),
      protocol: 'file:',
      slashes: true
   }))

   win.openDevTools();
}

app.on('ready', crtWindow)
