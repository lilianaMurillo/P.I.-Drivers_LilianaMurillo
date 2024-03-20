const { Router } = require("express");
//Importar todos los routers;
//Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Prueba de una ruta
server.get("/drivers", (req, res) => {
  res.status(200).send("Ruta con todos los pilotos");
});

// Prueba de una ruta por params
server.get("/drivers/:id", (req, res) => {
  const { id } = req.params; // aquí estamos extrayendo el id de los params por medio de una desestructuración, la cual es de acuerdo a lo que le hayamos pasado como parámetro en la url.
  res.status(200).send(`Ruta con el piloto con id: ${id}`);
});

// Prueba de una ruta con POST
server.post("/drivers", (req, res) => {
  res.status(200).send("Piloto creado correctamente");
});

module.exports = router;
