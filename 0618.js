const http = require('http');

const server = http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify({"Login name" : "lindt","Year" : "3","KG" : "Wellcomp"})\
		  );              res.end();
    });

server.listen(8080);

console.log('server running on port 8080');

