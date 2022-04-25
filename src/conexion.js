const { Router } = require("express");
const router = Router();
const { exec } = require("child_process");
const baseDatos = require('./database');

module.exports = router;

router.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    baseDatos.query('SELECT imagen FROM productos WHERE id = ?', [id], (err, rows, fields) => {

        if (!err) {
            res.json(rows[0]);
        }
        else {
            console.log(err)
        }
    });
});