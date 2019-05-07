const Sequelize = require('sequelize');

const db = new Sequelize({
    database: 'books_db',
    dialect: 'postgres'
});

module.exports = {
    db
};