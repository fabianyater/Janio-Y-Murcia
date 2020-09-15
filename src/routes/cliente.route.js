const express = require('express');
const router = express.Router();


const { addCliente, renderAddCliente, renderCliente, renderIndexCliente, deleteCliente, editCliente, renderEditCliente} = require('../controllers/cliente.controller');


router.get('/addCliente', renderAddCliente);

router.post('/addCliente', addCliente);

router.get('/listCliente', renderCliente);

router.get('/deleteCliente/:id', deleteCliente);

router.get('/editCliente/:id', renderEditCliente);

router.post('/editCliente/:id', editCliente);

router.get('/index', renderIndexCliente);

module.exports = router;