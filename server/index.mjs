import http from 'http';

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('close', () => {
      console.log(body);
    });

    res.writeHead(201);
    res.end('Successful POST');
  } else {
    res.writeHead(200);
    res.end('GET');
  }
});

server.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});
