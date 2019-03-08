//test your models in this file.
const { Planet } = require('./models');

const createPlanet = async () => {
  const planet = await Planet.create({
    name: "Feractha",
    num_moons: 1,
    color: "orange",
  });
  console.log(planet.dataValues);
  return planet;
};


const main = async () => {
  await createPlanet();
  await process.exit()
};

main();
