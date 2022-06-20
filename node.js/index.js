const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');
let win;
function createWindow() 
{
    win = new BrowserWindow({
        width: 700,
        height: 500,
      //  frame: false,
      // transparent: true,
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

   win.webContents.openDevTools();

    console.log(`++++`)
// setTimeout(() => {
//     console.log(`close app   ++++++++++`)
//     app.quit();
// }, 9000); 

}
 console.log(`here`)

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// app.on('window-all-closed', () => {
//     app.quit();
// });