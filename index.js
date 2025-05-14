require('dotenv').config()
const http= require('http')

function requestController(req, res){
    console.log('Solicitud recibida: ' + req.url)
    
    res.writeHead(200, {'Content-Type': 'text/html'})
    
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Desarrollo Web Avanzado</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                color: #333;
            }
            header {
                border-bottom: 1px solid #eee;
                padding-bottom: 10px;
                margin-bottom: 20px;
            }
            h1 {
                color: #2c3e50;
            }
            .info {
                background-color: #f9f9f9;
                padding: 15px;
                border-radius: 5px;
                margin-bottom: 20px;
            }
            footer {
                margin-top: 30px;
                text-align: center;
                font-size: 0.8em;
                color: #777;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Bienvenidos al curso de Desarrollo Web Avanzado</h1>
        </header>
        
        <div class="info">
            <h2>Sobre este proyecto</h2>
            <p>Este es un servidor Node.js simple que utiliza el módulo HTTP nativo.</p>
            <p>Estamos aprendiendo sobre despliegue de aplicaciones web.</p>
        </div>
        
        <section>
            <h2>Características del servidor</h2>
            <ul>
                <li>Creado con Node.js</li>
                <li>Configuración con dotenv</li>
                <li>Servidor HTTP básico</li>
            </ul>
        </section>
        
        <footer>
            <p>Semana 8 - Despliegue de Aplicaciones Web</p>
        </footer>
    </body>
    </html>
    `
    
    res.end(html)
}

const server=http.createServer(requestController)

const PORT=process.env.PORT

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})