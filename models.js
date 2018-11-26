const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'planets_sequelize_db',
  dialect: 'postgres',
  operatorsAliases: false
});

async function testConnection() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully');
  } catch (e) {
    console.error(e);
  } finally {
    process.exit();
  }
}

testConnection();

module.exports = {
  sequelize
}
