const BarberoCtrl = {}

const pool = require('../database');

BarberoCtrl.renderIndexBarbero = async (req, res) => {
    res.render('index');
};

BarberoCtrl.renderAddBarbero = (req, res) => {
    res.render('addBarbero');
};

BarberoCtrl.AddBarbero = async (req, res) => {
    const {
        Identificacion,
        PrimerNombre,
        SegundoNombre,
        PrimerApellido,
        SegundoApellido,
        Telefono,
        Valoracion,
        BarberiaFK
        
    } = req.body;
    const newBarbero = {
        Identificacion,
        PrimerNombre,
        SegundoNombre,
        PrimerApellido,
        SegundoApellido,
        Telefono,
        Valoracion,
        BarberiaFK
    };
    console.log(newBarbero);
    await pool.query('INSERT INTO Barbero set ?', [newBarbero]);
    res.redirect('index');
};

BarberoCtrl.renderBarbero = async (req, res) => {
    const barberos = await pool.query('SELECT * FROM Barbero');
    res.render('listBarbero', {barberos});
};

module.exports = BarberoCtrl;