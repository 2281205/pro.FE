const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 700,
        height: 500,
        frame: false,
      // transparent: true,
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

   // win.webContents.openDevTools();


        // var remote = require('electron').remote;
        // var close = document.querySelector('#close');
        //     close.addEventListener("click", () =>  {
        //     var window = remote.getCurrentWindow();
        //     window.close();
        //     }); 
        // win.on('closed', () => {
        // win = null;
        // });


}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});