const express = require('express');
const router = express.Router();


const { addBarberia, renderAddBarberia, renderBarberias, renderIndexBarberia } = require('../controllers/barberia.controller');


router.get('/addBarberia', renderAddBarberia);

router.post('/addBarberia', addBarberia);

router.get('/listBarberia', renderBarberias);

router.get('/index', renderIndexBarberia);

module.exports = router;