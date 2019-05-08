const express = require('express');
const { db, Planet } = require('./models.js');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', async (request, response) => {
    response.send('Hello friend!');
  });

app.get('/allplanets', async (request, response) => {
    try {
        const allThePlanets = await Planet.findAll();
        response.send(allThePlanets);
    } catch (error) {
        console.log(`The black hole error: ${error}`);
    }
});

app.get('/oneplanet/:id', async (request, response) => {
    try {
        const onePlanet = await Planet.findByPk
        (request.params.id);
        response.send(onePlanet);
    } catch (error) {
        console.log(`The black hole error: ${error}`);
    }
});
app.post('/createplanet', async (request, response) => {
    try {
        console.log(request.body);
        const createPlanet = await Planet.create(request.body);
        response.send(`New planet ${createPlanet.name} created!`);
    } catch (error) {
        console.log(`The black hole error: ${error}`);
    }
})

app.listen(PORT, () => console.log(`Listening to bossonova on port ${PORT}`));