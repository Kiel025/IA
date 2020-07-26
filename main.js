const { app, janela } = require ('electron')

function createWindow(){
    var janela = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        }
    })

    janela.loadFile('index.html')
}

app.whenReady().then(createWindow)