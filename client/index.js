const electron = require('electron')
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');

const {app, BrowserWindow } = electron

let mainWindow
function createWindow(){
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 800,
    minHeight:600,
    webPreferences: {backgroundThrottling: false}
  })
  mainWindow.loadURL(`http://localhost:3000/dashboard`)
}
app.on('ready', createWindow)

app.on('ready', () => {
  [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS].forEach(extension => {
    installExtension(extension)
        .then((name) => console.log(`Added Extension: ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
  });
});


app.on('window-all-closed', () => {
	app.quit();
});
