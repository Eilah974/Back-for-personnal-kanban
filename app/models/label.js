// Model pour les labels
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

class Label extends Sequelize.Model {}

Label.init({
    title: Sequelize.TEXT,
    color: Sequelize.TEXT,
}, {
    sequelize,
    tableName: 'label',
});

module.exports = Label;
