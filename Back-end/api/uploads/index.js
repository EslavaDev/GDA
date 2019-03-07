const { Router } = require('express');
const controller = require('./uploads.controller');

const router = new Router();

router.put('/:tipo/:id', [verifyToken], controller.updates);


module.exports = router;