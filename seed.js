const { db, Planet } = require('./models.js');
const axios = require('axios');



const getPlanets = async () => {
    const allPlanets = await axios('https://wdi-nyc-planets-api.herokuapp.com/planets')
    const planetData = await Planet.bulkCreate(allPlanets.data.planets);

}

const main = async () => {
    // await Planet.destroy({
    //     where: {}
    // });
await getPlanets();
process.exit();
};


main();