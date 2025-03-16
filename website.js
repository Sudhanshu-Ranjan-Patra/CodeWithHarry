const http = require('node:http');
const fs = require('fs');
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(`Request URL: ${req.url}`);

    if (req.url === '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }else if (req.url === '/Home') {
        res.statusCode = 200;
        res.end('<h1>Sudhanshu Ranjan Patra</h1><p>Bhai Mane Bhaya</p>');
    } else if (req.url === '/srp') {
        res.statusCode = 200;
        res.end('<h1>S R P</h1><p>Bhai Mane SRP</p>');
    } else {
        res.statusCode = 404;
        res.end('<h1>Page Not Found!!!</h1>');
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
