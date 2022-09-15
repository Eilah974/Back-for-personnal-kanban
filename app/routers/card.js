const express = require('express');
const { cardController } = require('../controllers');
const controllersHandler = require('../helpers/controllersHandler');

const router = express.Router();

router
    .route('/')
    .get(controllersHandler(cardController.getCards))
    .post(controllersHandler(cardController.createCard));

router
    .route('/:id')
    .get(controllersHandler(cardController.readCard))
    .put(controllersHandler(cardController.updateCard))
    .delete(controllersHandler(cardController.delete));

router
    .route('/:cardId/label/:labelId')
    .post(controllersHandler(cardController.addLabelToCard))
    .delete(controllersHandler(cardController.removeLabelFromCard));

module.exports = router;
