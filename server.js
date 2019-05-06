const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');

const { Planets } = require('./models');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/planets', async (req, resp) => {
  try {
    // await resp.send('<h1>Hadouken!</h1>')
    const allPlanets = await Plents.findAll();
    resp.send(allPlanets)
  } catch (err) {
    resp.status(500).json({msg: err.message});
  }
});

app.post('/planets', async (req, resp) => {
  try {
    await resp.send(req.body);
  } catch (err) {
    resp.status(500).json({msg: err.message});
  }
});

app.listen(
  PORT,
  () => console.log(`Listening on PORT ${PORT}`),
);
