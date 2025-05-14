const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(`Request URL: ${req.url}`);

    let fileName = '';
    switch (req.url) {
        case '/':
            fileName = 'index.html';
            break;
        case '/about':
            fileName = 'about.html';
            break;
        case '/contact':
            fileName = 'contact.html';
            break;
        default:
            fileName = '404.html';
    }

    const filePath = path.join(__dirname, 'pages', fileName);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
        } else {
            const statusCode = fileName === '404.html' ? 404 : 200;
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
