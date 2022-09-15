const { List, Card } = require('../models');
const { ApiError } = require('../helpers/errorHandler');

const listController = {
    getLists: async (req, res) => {
        // méthode pour récupérer les listes
        const lists = await List.findAll({
            include: {
                association: 'cards',
                include: 'labels',
            },
            order: [
                ['position', 'ASC'],
                ['name', 'ASC'],
                ['cards', 'position', 'ASC'],
            ],
        });
        return res.json(lists);
    },

    readList: async (req, res) => {
        // méthode pour lire une liste
        const { id } = req.params;
        const list = await List.findByPk(id);
        // on vérifie si la liste existe
        if (!list) {
            throw new ApiError(`Aucune liste à l'id ${id}`, { statusCode: 404 });
        }

        // si liste
        return res.json(list);
    },

    createList: async (req, res) => {
        // méthode pour créer une liste
        if (!req.body.name) {
            throw new ApiError('Nom obligatoire', { statusCode: 400 });
        }

        // on regoupe toutes les infos du body dans data
        const data = {
            name: req.body.name,
            position: req.body.position,
        };

        const newList = await List.create(data);

        return res.json(newList);
    },

    updateList: async (req, res) => {
        // méthode pour mettre à jour une liste
        const { id } = req.params;
        const list = await List.findByPk(id);

        // on vérifie si la carte existe
        if (!list) {
            throw new ApiError(`Aucune lsite à l'id ${id}`, { statusCode: 404 });
        }

        const {
            name, position,
        } = req.body;

        if (name) {
            list.name = name;
        }

        if (position) {
            list.position = position;
        }

        // on sauvegarde les modifications dans la BDD
        const listSaved = await list.save();
        return res.json(listSaved);
    },

    delete: async (req, res) => {
        // méthode pour supprimer un label
        const { id } = req.params;
        const list = await List.findByPk(id);

        // on vérifie si le label existe
        if (!list) {
            throw new ApiError(`Aucune liste à l'id ${id}`, { statusCode: 404 });
        }

        // si label, on la supprime
        await list.destroy();
        return res.json('Liste supprimée');
    },

    readCards: async (req, res) => {
        // on récupère l'id de la liste
        const { id } = req.params;
        // on récupère les cartes remplissant une condition
        const cards = await Card.findAll({
            where: {
                list_id: id,
            },
            include: 'labels',
        });
        // on renvoie les cartes
        return res.json(cards);
    },
};

module.exports = listController;
