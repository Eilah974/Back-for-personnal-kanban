const express = require('express');

const { ApiError } = require('../helpers/errorHandler');

const router = express.Router();

// On préfixe les routers
// liste du ou des routers ...
// ...
// ..

router.use(() => {
    throw new ApiError('Route not found', { statusCode: 404 });
});

module.exports = router;
