const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world!');
});


// listening on port 8000

const port = 8000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})