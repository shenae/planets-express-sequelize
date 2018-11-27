const { Planet } = require('./models');

async function createPlanets() {
  console.log('I should create three planets');
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
