const http = require('http');  // Importa el módulo HTTP

// Define el puerto en el que se ejecutará el servidor
const port = 3000;

// Crea un servidor HTTP
const server = http.createServer((req, res) => {
    // Establece el tipo de contenido a texto plano
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Envía el mensaje "Hola Mundo" como respuesta
    res.end('Hola Mundo\n');
});

// El servidor escucha en el puerto 3000
server.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
