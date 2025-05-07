require('dotenv').config()
const http = require('http')
const fs = require('fs')
const path = require('path')

// Función para manejar las solicitudes
function requestController(req, res) {
    // Obtener la ruta solicitada
    let filePath = '.' + req.url
    if (filePath === './') {
        filePath = './index.html'
    }

    // Obtener la extensión del archivo
    const extname = path.extname(filePath)
    let contentType = 'text/html'
    
    // Establecer el tipo de contenido según la extensión
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
    }

    // Leer el archivo
    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                // Página no encontrada
                fs.readFile('./404.html', function(error, content) {
                    res.writeHead(404, { 'Content-Type': 'text/html' })
                    res.end(content, 'utf-8')
                })
            } else {
                // Error del servidor
                res.writeHead(500)
                res.end('Error del servidor: ' + error.code)
            }
        } else {
            // Éxito
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content, 'utf-8')
        }
    })
}

const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function() {
    console.log("Aplicacion corriendo en: " + PORT)
})