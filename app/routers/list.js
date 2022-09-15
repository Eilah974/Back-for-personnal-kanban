const express = require('express');
const { listController } = require('../controllers');
const controllersHandler = require('../helpers/controllersHandler');

const router = express.Router();

router
    .route('/')
    .get(controllersHandler(listController.getLists))
    .post(controllersHandler(listController.createList));

router
    .router('/:id')
    .get(controllersHandler(listController.readList))
    .put(controllersHandler(listController.updateList))
    .delete(controllersHandler(listController.delete));

router
    .route('/:id/cards')
    .get(controllersHandler(listController.readCards));

module.exports = router;
