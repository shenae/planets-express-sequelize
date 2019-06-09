const Sequelize = require('sequelize');

const db = new Sequelize({
    database: 'solar_system_db',
    dialect: 'postgres',
    define: {
        underscored: true
    }
});

const Planet = db.define('planets', {
    name: Sequelize.STRING,
    num_moons: Sequelize.INTEGER,
    color: Sequelize.TEXT
});

module.exports = {
    db,
    Planet
};