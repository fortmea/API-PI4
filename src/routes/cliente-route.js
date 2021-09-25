'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente-controller');

router.get('/:id', controller.get);
router.post('/cliente', controller.post);

module.exports = router;   