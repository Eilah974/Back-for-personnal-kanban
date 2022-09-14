const { Label } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

const labelController = {
    getLabels: async (req, res) => {
        // méthode pour récupérer les labels
        const labels = await Label.findAll();
        return res.json(labels);
    },

    readLabel: async (req, res) => {
        // méthode pour lire un label
        const { id } = req.params;
        const label = await Label.findByPk(id);
        // on vérifie si le label existe
        if (!label) {
            throw new ApiError(`Aucun label à l'id ${id}`, { statusCode: 404 });
        }

        // si carte
        return res.json(label);
    },

    createLabel: async (req, res) => {
        // méthode pour créer un label
        if (!req.body.title) {
            throw new ApiError('titre obligatoire', { statusCode: 400 });
        }

        // on regoupe toutes les infos du body dans data
        const data = {
            title: req.body.title,
            color: req.body.color,
        };

        const newLabel = await Label.create(data);

        return res.json(newLabel);
    },

    updateLabel: async (req, res) => {
        // méthode pour mettre à jour un label
        const { id } = req.params;
        const label = await Label.findByPk(id);

        // on vérifie si la carte existe
        if (!label) {
            throw new ApiError(`Aucun label à l'id ${id}`, { statusCode: 404 });
        }

        const {
            title, color,
        } = req.body;

        if (title) {
            label.title = title;
        }

        if (color) {
            label.color = color;
        }

        // on sauvegarde les modifications dans la BDD
        const labelSaved = await label.save();
        return res.json(labelSaved);
    },

    delete: async (req, res) => {
        // méthode pour supprimer un label
        const { id } = req.params;
        const label = await Label.findByPk(id);

        // on vérifie si le label existe
        if (!label) {
            throw new ApiError(`Aucun label à l'id ${id}`, { statusCode: 404 });
        }

        // si label, on la supprime
        await label.destroy();
        return res.json('Carte supprimée');
    },
};

module.exports = labelController;
