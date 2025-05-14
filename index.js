require('dotenv').config()
const http= require('http')

function requestController(req, res){
    console.log('Bienvenidos al curso')
    
    // Configurar el encabezado de respuesta como HTML
    res.writeHead(200, {'Content-Type': 'text/html'})
    
    // Enviar una respuesta HTML simple con tu nombre
    res.end(`
        <h1>Bienvenidos al curso de Desarrollo Web Avanzado</h1>
        <p>Mi nombre es: Adrian Abel Gamarra Andia</p>
        <p>Estudiante de Desarrollo de Aplicaciones Web</p>
        <p>Semana 8 - Despliegue de aplicaciones</p>
    `)
}

const server=http.createServer(requestController)

const PORT=process.env.PORT

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})