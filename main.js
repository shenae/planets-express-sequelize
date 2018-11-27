const { Planet } = require('./models');

async function createPlanets() {
  try {
    await Planet.bulkCreate([
      {
        name: 'Earth',
        num_moons: 3,
        color: 'blue'
      },
      {
        name: 'Mars',
        num_moons: 2,
        color: 'red'
      },
      {
        name: 'Mercury',
        num_moons: 0
      }
    ]);
  } catch (e) {
    console.error(e);
  }
}

async function printPlanets() {
  const planets = await Planet.findAll();
  console.log(planets.map(({dataValues}) => dataValues)); // planet => planet.dataValues
}

async function changeColor() {
  const mercury = await Planet.findOne({
    where: { name: 'Mercury' }
  });
  mercury.color = 'grey';
  await mercury.save();
}

async function deletePlanet() {
  console.log('I should delete a planet');
}

async function run() {
  // await createPlanets();
  await printPlanets();
  await changeColor();
  await deletePlanet();
  await printPlanets();
}

run();
