const http = require('http');
const LinkedList = require('./src/LinkedList');

const hostname = '127.0.0.1';
const port = 3000;

/******************************/
const ll = new LinkedList();
ll.append(12);
ll.prepend(14);
console.log(ll);
/******************************/

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port);