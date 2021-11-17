'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/Lista-controller');
router.get('/', controller.default);
router.get('/search/:id', controller.get);
router.post('/tarefa', controller.post);
router.post('/delete', controller.delete)
router.post('/update', controller.put);
module.exports = router;