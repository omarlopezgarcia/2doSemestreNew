// Importando librerías
var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var path = require('path');
var app = express();

// Usar librerías
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
app.use(cors());

var connection = mysql.createConnection(
    {
        host: "dbomar.c7meiigiqawb.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "CuentaDatabase",
        database: "clientdb"
    }
);

// Probando conexión
connection.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log("Conexión exitosa");
    }
}
);
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Servidor funcionando en " + port);
});

// Ruta para servir `index.html`
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get(
    "/api/dates/:current", (req, res) => {
        var request = req.params.current;
        connection.query(
            "select NAMECAL, DESCCAL, DATE_FORMAT(DATECAL, '%d/%m/%Y') AS DATECAL from calendarie where DATECAL = '" + request + "'",
            function (err, row, fields) {
                if (err) {
                    throw err;
                } else if (row[0] != null) {
                    res.json(
                        row[0]
                    );
                } else {
                    res.json(null)
                }
            })
    })
