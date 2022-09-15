const express = require('express');
const { labelController } = require('../controllers');
const controllersHandler = require('../helpers/controllersHandler');

const router = express.Router();

router
    .route('/')
    .get(controllersHandler(labelController.getLabels))
    .post(controllersHandler(labelController.createLabel));

router
    .route('/:id')
    .get(controllersHandler(labelController.readLabel))
    .put(controllersHandler(labelController.updateLabel))
    .delete(controllersHandler(labelController.delete));

module.exports = router;
