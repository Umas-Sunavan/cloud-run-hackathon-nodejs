const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle beginsssss!');
});

app.post('/', function (req, res) {
  console.log(req.body);
  const myState = req.body.Arena.State[input.Links.Self.Href]
  console.log("myState", myState);
  const moves = ['F', 'T', 'L', 'R'];
  res.send(moves[Math.floor(Math.random() * moves.length)]);
});

app.listen(process.env.PORT || 8080);
