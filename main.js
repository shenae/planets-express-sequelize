const { Planet, Star, StarSystem } = require('./models');

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
}

async function associatePlanetsAndStar() {
  const sun = await Star.findOne({
    where: { name: 'Sun'}
  });
  const planets = await Planet.findAll();
  await sun.setPlanets(planets, { through: { name: 'Solar System' }});
  const associatedPlanets = await Planet.findAll();
  console.log(associatedPlanets.map(planet => planet.get({plain: true})));
}

async function associatePlanetsAndStars() {
  await Star.bulkCreate([
    {
      name: 'Beta Cygni A',
      size: 'Huge'
    },
    {
      name: 'Beta Cygni B',
      size: 'Not quite as huge but still pretty big'
    }
  ]);
  await Planet.bulkCreate([
    {
      name: 'Kepler152b',
      num_moons: 5,
      color: 'blue'
    },
    {
      name: 'Kepler152c',
      num_moons: 25,
      color: 'blue'
    }
  ]);
  const starsPromise = Star.findAll({
    where: {
      name: {
        [Op.or]: ['Beta Cygni B', 'Beta Cygni A']
      }
    }
  });
  const planetsPromise = Planet.findAll({
    where: {
      name: {
        [Op.or]: ['Kepler152b', 'Kepler152c']
      }
    }
  });
  const [stars, planets] = await Promise.all([starsPromise, planetsPromise]);
  await Promise.all(stars.map(s => s.setPlanets(planets)));
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
    await associatePlanetsAndStar();
  } catch (e) {
    console.error(e);
  }
  process.exit();
}

run();
