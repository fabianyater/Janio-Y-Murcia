const ClienteCtrl = {}

const pool = require('../database');

ClienteCtrl.renderIndexCliente = async (req, res) => {
    res.render('index');
};

ClienteCtrl.renderAddCliente = (req, res) => {
    res.render('addCliente');
};

ClienteCtrl.addCliente = async (req, res) => {
    const {
        Identificacion,
        PrimerNombre,
        SegundoNombre,
        PrimerApellido,
        SegundoApellido,
        Direccion,
        Celular
    } = req.body;
    const newCliente = {
        Identificacion,
        PrimerNombre,
        SegundoNombre,
        PrimerApellido,
        SegundoApellido,
        Direccion,
        Celular
        
    };
    console.log(newCliente);
    await pool.query('INSERT INTO Cliente set ?', [newCliente]);
    res.redirect('index');
};

ClienteCtrl.renderCliente = async (req, res) => {
    const clientes = await pool.query('SELECT * FROM Cliente');
    res.render('listCliente', {clientes});
};

ClienteCtrl.renderEditCliente = async(req, res) => {
    const { id } = req.params;
    const clientes = await pool.query('SELECT * FROM Cliente WHERE Identificacion = ?', [id]);
    res.render('editCliente', { cliente: clientes[0] });
};

ClienteCtrl.editCliente = async(req, res) => {
    const { id } = req.params;
    const { 
        Identificacion,
        PrimerNombre,
        SegundoNombre,
        PrimerApellido,
        SegundoApellido,
        Direccion,
        Celular 
    } = req.body;
    const newCliente = {
        Identificacion,
        PrimerNombre,
        SegundoNombre,
        PrimerApellido,
        SegundoApellido,
        Direccion,
        Celular
    };
    await pool.query('UPDATE Cliente SET ? WHERE Identificacion = ?', [newCliente, id]);
    res.redirect('/listCliente');
}

ClienteCtrl.deleteCliente = async(req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM Cliente WHERE Identificacion = ?', [id]);
    res.redirect('/listCliente');
};

module.exports = ClienteCtrl;