const { Planet } = require('./models');

async function createPlanets() {
  await Planet.destroy({ where: {}});
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
  await Planet.destroy({
    where: { name: 'Mercury'}
  });
}

async function run() {
  try {
    await createPlanets();
    await printPlanets();
    await changeColor();
    await deletePlanet();
    await printPlanets();
    await createStar();
  } catch (e) {
    console.error(e);
  }
  process.exit();
}

run();
