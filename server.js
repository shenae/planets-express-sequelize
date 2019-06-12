const express = require('express');
const { planetRouter } = require('./planetRouter.js');
const logger = require('morgan');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/planets', planetRouter)

app.get('/', async (request, response) => {
    response.send('Hello friend!');
  });


app.listen(PORT, () => console.log(`Listening to bossonova on port ${PORT}`));