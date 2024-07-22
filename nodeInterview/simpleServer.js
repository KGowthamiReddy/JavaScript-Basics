const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('file.html', (err, data) => {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);

        res.end('creating simple server');
    });
  
});

server.listen(3000, ()  => {
    console.log(`server started to run`);
});