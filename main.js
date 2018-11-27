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
  console.log('I should query for all planets and print the resulting datavalues');
}

async function changeColor() {
  console.log('I should change the color of a planet');
}

async function deletePlanet() {
  console.log('I should delete a planet');
}

async function run() {
  await createPlanets();
  await printPlanets();
  await changeColor();
  await deletePlanet();
  await printPlanets();
}

run();