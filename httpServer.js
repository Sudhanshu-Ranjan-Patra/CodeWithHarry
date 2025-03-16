const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    console.log(req.url);
    res.end('<h1>Sudhanshu Ranjan Patra</h1><p>Bhai Mane Bhaya</p>');
})

server.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
});
