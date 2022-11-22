// Hacemos Un Importacion Y LLamamos Un bloque de un Codigo Extraer Codigos 
const { app, BrowserWindow } = require('electron')


const createWindow = () => {
    // Almacenamos En Una Variable 
    const win = new BrowserWindow({
        // BrowserWindow Crea o Muesta Una ventana 
        // Tamaños Y El Hancho 
        width: 800,
        height: 600,
        // Quita El Menu de Electron que genera por defecto 
        autoHideMenuBar: true
    })

    // Importamos Un Archivo .html 
    win.loadFile('index.html')
}

// App = Application Es Toda La Aplicacion o Que contiene La Aplicacion


app.whenReady().then(() => {
    // Llamamos Una Funcion 
    createWindow()
})  