const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'planets_sequelize_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true, // use underscored column names for columns generated by sequelize (e.g. timestamps as created_at rather than createdAt)
  }
});

// async function testConnection() {
//   try {
//     await sequelize.authenticate()
//     console.log('Connection has been established successfully');
//   } catch (e) {
//     console.error(e);
//   } finally {
//     process.exit();
//   }
// }
//
// testConnection();

const Planet = sequelize.define('planet', {
  name: Sequelize.STRING,
  num_moons: Sequelize.INTEGER,
  color: Sequelize.STRING
});

const Star = sequelize.define('star', {
  name: Sequelize.STRING,
  size: Sequelize.STRING
});

Planet.belongsTo(Star);
Star.hasMany(Planet);

module.exports = {
  sequelize,
  Planet,
  Star
}
