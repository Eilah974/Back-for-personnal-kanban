const { Card, Label } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

const cardController = {
    getCards: async (_, res) => {
        // méthode pour lire les cartes
        const cards = await Card.findAll({
            include: 'labels',
            order: [
                ['position', 'ASC'],
            ],
        });

        return res.json(cards);
    },

    readCard: async (req, res) => {
        // méthode pour lire une cartes
        const { id } = req.params;
        const card = await Card.findByPk(id, {
            include: 'labels',
            order: [
                ['position', 'ASC'],
            ],
        });
        // on vérifie si la carte existe
        if (!card) {
            throw new ApiError(`Aucune carte à l'id ${id}`, { statusCode: 404 });
        }

        // si carte
        return res.json(card);
    },

    createCard: async (req, res) => {
        // méthode pour la création d'une carte
        if (!req.body.title) {
            throw new ApiError('titre obligatoire', { statusCode: 400 });
        }

        if (!req.body.listId) {
            throw new ApiError('ListId obligatoire', { statusCode: 400 });
        }

        // on regoupe toutes les infos du body dans data
        const data = {
            title: req.body.title,
            color: req.body.color,
            description: req.body.description,
            position: req.body.position,
            listId: req.body.listId,
        };

        const newCard = await Card.create(data);

        return res.json(newCard);
    },

    updateCard: async (req, res) => {
        // méthode pour mettre à jour une carte
        const { id } = req.params;
        const card = await Card.findByPk(id);

        // on vérifie si la carte existe
        if (!card) {
            throw new ApiError(`Aucune carte à l'id ${id}`, { statusCode: 404 });
        }

        const {
            title, color, description, position, listId,
        } = req.body;

        if (title) {
            card.title = title;
        }

        if (color) {
            card.color = color;
        }

        if (description) {
            card.description = description;
        }

        if (position) {
            card.position = position;
        }

        if (listId) {
            card.listId = listId;
        }

        // on sauvegarde les modifications dans la BDD
        const cardSaved = await card.save();
        return res.json(cardSaved);
    },

    delete: async (req, res) => {
        // méthode pour supprimer une carte
        const { id } = req.params;
        const card = await Card.findByPk(id);

        // on vérifie si la carte existe
        if (!card) {
            throw new ApiError(`Aucune carte à l'id ${id}`, { statusCode: 404 });
        }

        // si carte, on la supprime
        await card.destroy();
        return res.json('Carte supprimée');
    },

    addLabelToCard: async (req, res) => {
        // méthode pour ajouter un label à une carte
        const { cardId, labelId } = req.params;
        // on récupère la carte
        const card = await Card.findByPk(cardId, {
            include: 'labels',
        });

        // on verifie si la carte existe
        if (!card) {
            throw new ApiError(`Acune carte à l'id ${cardId}`, { statusCode: 404 });
        }

        // on récupère le label
        const label = await Label.findByPk(labelId);

        // on vérifie si le label existe
        if (!label) {
            throw new ApiError(`Acun label à l'id ${labelId}`, { statusCode: 404 });
        }

        // on ajoute le label à la carte
        await card.addLabel(label);
        // on recharge la carte pour voir la modification
        await card.reload();

        return res.json(card);
    },

    removeLabelFromCard: async (req, res) => {
        // méthode pour retirer un label à une carte
        const { cardId, labelId } = req.params;
        const card = await Card.findByPk(cardId, {
            include: 'labels',
        });

        // on verifie si la carte existe
        if (!card) {
            throw new ApiError(`Acune carte à l'id ${cardId}`, { statusCode: 404 });
        }

        // on récupère le label
        const label = await Label.findByPk(labelId);

        // on vérifie si le label existe
        if (!label) {
            throw new ApiError(`Acun label à l'id ${labelId}`, { statusCode: 404 });
        }

        // on retire le label à la carte
        await card.removeLabel(label);
        // on recharge la carte pour voir la modification
        await card.reload();

        return res.json(card);
    },
};

module.exports = cardController;
