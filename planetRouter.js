const express = require('express');
const planetRouter = express.Router();
const { Planet } = require('./models.js');
const bodyParser = require('body-parser');
const logger = require('morgan');

planetRouter.use(bodyParser.json());
//planetRouter.use(logger,('dev'));

//planetRouter = express();

planetRouter.get('/', async (request, response) => {
    try {
        const allThePlanets = await Planet.findAll();
        response.send(allThePlanets);
    } catch (error) {
        console.log(`The black hole error: ${error}`);
    }
});

planetRouter.get('/oneplanet/:id', async (request, response) => {
    try {
        const onePlanet = await Planet.findByPk
        (request.params.id);
        response.send(onePlanet);
    } catch (error) {
        console.log(`The black hole error: ${error}`);
    }
});

planetRouter.post('/createplanet', async (request, response) => {
    try {
        console.log(request.body);
        const createPlanet = await Planet.create(request.body);
        response.send(`New planet ${createPlanet.name} created!`);
    } catch (error) {
        console.log(`The black hole error: ${error}`);
    }
});

module.exports = { planetRouter };

