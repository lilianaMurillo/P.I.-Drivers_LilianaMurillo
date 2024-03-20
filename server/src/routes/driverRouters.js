const { Router } = require("express"); // Se importa el módulo Router de express
const driverRouters = Router(); // Se crea una instancia de Router

// Prueba de una ruta
driverRouters.get("/", (req, res) => {
  res.status(200).send("Ruta con todos los pilotos");
});

// Prueba de una ruta por params
driverRouters.get("/:id", (req, res) => {
  const { id } = req.params; // aquí estamos extrayendo el id de los params por medio de una desestructuración, la cual es de acuerdo a lo que le hayamos pasado como parámetro en la url.
  res.status(200).send(`Ruta con el piloto con id: ${id}`);
});

// Prueba de una ruta con POST
driverRouters.post("/", (req, res) => {
  res.status(200).send("Piloto creado correctamente");
});

// // Se importa el controlador de drivers
// const {
//   createDriver,
//   getDrivers,
//   getDriverById,
//   updateDriver,
//   deleteDriver,
// } = require("../controllers/driverController");

// Se definen las rutas con los métodos HTTP que se necesiten
module.exports = driverRouters; // Se exporta el router para que pueda ser usado en otros archivos
