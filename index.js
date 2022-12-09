const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3001;

const projetcs = require('./api/projects.json');
const ongoing = require('./api/ongoing.json');
app.use(cors());

app.get('/projects', (_, req) => {
  return req.json(projetcs);
});

app.get('/ongoing', (_, req) => {
  return req.json(ongoing);
});

app.listen(port, () => console.log("Server ON"));