const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

//callback function
const server = http.createServer((req, res) => {

//    url.parse()
const pathName = url.parse(req.url, true).pathname;
const id = url.parse(req.url, true).query.id;

console.log(url.parse(req.url, true));


if (pathName === '/products' || pathName === '/') {
   res.writeHead(200, {'Content-type': 'text/html'});
   res.end(`This Products page!${4}`);
}

else if (pathname === '/laptop' && id < laptopData.length) {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end('this is the Laptop page');
}

else {
    res.writeHead(404, { 'Content-type': 'text/html'});
    res.end('URL is not good');
}

});

server.listen(1337, '127.0.0.1', () => {
    console.log('Listening');
});