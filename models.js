const Sequelize = require('sequelize');

const db = new Sequelize({
    database: 'solar_system_db',
    dialect: 'postgres'
});

const Planet = db.define('planets', {
    name: Sequelize.TEXT,
    num_moons: Sequelize.INTEGER,
    color: Sequelize.TEXT
});

module.exports = {
    db,
    Planet
};