const express = require('express');
const port = process.env.PORT || 3001;
const docGen = require('./docGen');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>get it</h1>');
});

server.get('/doc-gen', (req, res) => {
    docGen(req, res);
});

server.post('/doc-gen', (req, res) => {
    docGen(req.body);
});

server.post('doc-gen/fines', (req, res) => {

});

server.listen(port, () => console.log(`The server is listening on port ${port}`));