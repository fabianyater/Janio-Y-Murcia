const express = require('express');
const router = express.Router();


const { AddBarbero, renderAddBarbero, renderBarbero, renderIndexBarbero } = require('../controllers/barbero.controller');


router.get('/addBarbero', renderAddBarbero);

router.post('/addBarbero', AddBarbero);

router.get('/listBarbero', renderBarbero);

router.get('/index', renderIndexBarbero);

module.exports = router;