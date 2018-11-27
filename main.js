const { Planet, Star } = require('./models');

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

async function createStar() {
  await Star.destroy({ where: {}});
  await Star.create({
    name: 'Sun',
    size: 'yellow dwarf'
  })
}

async function changeStar() {
  const sun = await Star.findOne({
    where: { name: 'Sun'}
  });
  sun.size = 'Pretty big';
  await sun.save();
  console.log(sun.dataValues);
}

async function run() {
  try {
    await createPlanets();
    await printPlanets();
    await changeColor();
    await deletePlanet();
    await printPlanets();
    await createStar();
    await changeStar();
  } catch (e) {
    console.error(e);
  }
  process.exit();
}

run();
