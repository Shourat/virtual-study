
//backend with node js

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('nodeindex.html')
const todo = fs.readFileSync('./to-do.html')
const flashcards = fs.readFileSync('./flashcards.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/to-do'){
        res.end(todo);
    }
    else if(url == '/flashcards'){
        res.end(flashcards);
    }
    
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
