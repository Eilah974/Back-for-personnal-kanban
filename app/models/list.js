// Model pour les listes
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

class List extends Sequelize.Model {}

List.init({
    name: Sequelize.TEXT,
    position: Sequelize.SMALLINT,
}, {
    sequelize,
    tableName: 'list',
});

module.exports = List;
