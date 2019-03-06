const express = require('express');
const cors = require('cors');

const app = express();

const port = process.argv[2]||8081
console.log("Port input is %s", port)
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Start REST server on port specified from cmdline arguments if not specified use 8081
const server = app.listen(port, '0.0.0.0', function () {
  let host = server.address().address
  let port = server.address().port
  console.log("Rest API server listening on http://%s:%s", host, port)
});

app.use(cors());

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

