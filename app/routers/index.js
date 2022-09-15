const express = require('express');

// Imports des différents routers
const cardRouter = require('./card');
const labelRouter = require('./label');
const listRouter = require('./list');

const { ApiError } = require('../helpers/errorHandler');

const router = express.Router();

// On préfixe les routers
router.use('/cards', cardRouter);
router.use('/labels', labelRouter);
router.use('/lists', listRouter);

router.use(() => {
    throw new ApiError('Cette route n\'existe pas', { statusCode: 404 });
});

module.exports = router;
