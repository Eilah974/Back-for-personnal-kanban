// Model pour les cartes
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

class Card extends Sequelize.Model {}

Card.init({
    title: Sequelize.TEXT,
    description: Sequelize.TEXT,
    color: Sequelize.TEXT,
    position: Sequelize.SMALLINT,
}, {
    sequelize,
    tableName: 'card',
});

module.exports = Card;
