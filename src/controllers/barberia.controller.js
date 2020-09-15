const barberiaCtrl = {}

const pool = require('../database');

barberiaCtrl.renderIndexBarberia = async (req, res) => {
    res.render('index');
};

barberiaCtrl.renderAddBarberia = (req, res) => {
    res.render('addBarberia');
};

barberiaCtrl.addBarberia = async (req, res) => {
    const {
        NIT,
        Nombre,
        Direccion,
        Municipio,
        Celular,
        Valoracion
    } = req.body;
    const newBarberia = {
        NIT,
        Nombre,
        Direccion,
        Municipio,
        Celular,
        Valoracion
    };
    console.log(newBarberia);
    await pool.query('INSERT INTO Barberia set ?', [newBarberia]);
    res.redirect('index');
};

barberiaCtrl.renderBarberias = async (req, res) => {
    const barberias = await pool.query('SELECT * FROM Barberia');
    res.render('listBarberia', { barberias });
};

module.exports = barberiaCtrl;