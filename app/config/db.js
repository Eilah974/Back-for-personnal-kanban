// Liaison à la base de donnée
// Importation de la class Sequelize du module Sequelize
const { Sequelize } = require('sequelize');

// Création de l'instance de Sequelize pour me connecter à la BDD postgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    define: {
        underscored: true, // Utilissation du snake_case par défaut
    },
});

module.exports = sequelize;
