const mysql = require('mysql');

const baseDatosUsuarios = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'usuarios',
})

const baseDatosProductos = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'productos',
})

//conexion a la base de datos por medio de la const "data"
baseDatos.connect(function (err) {
    if(!err){
        console.log('Conexión establecida con la base de datos')
    } else {
        console.log(err);
        return;
    }
});

//exportamos el modulo para usarlo en otra parte del app
module.exports = baseDatosUsuarios;
module.exports = baseDatosProductos;