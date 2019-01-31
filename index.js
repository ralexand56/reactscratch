import express from 'express';
import http from 'http';

const app = express();

const server = http.createServer(app);

server.listen(3000);
server.on('listening', () => {
  console.log('Im here now baby!');
});

app.get('*', (req, res) => {
  res.end('Hello Express2');
});
