const { Router } = require("express");
const teamRouters = Router(); // Se crea una instancia de Router

// Prueba de una ruta
teamRouters.get("/", (req, res) => {
  res.status(200).send("Ruta con todos los equipos");
});

// Prueba de una ruta por params
teamRouters.get("/:id", (req, res) => {
  const { id } = req.params; // aquí estamos extrayendo el id de los params por medio de una desestructuración, la cual es de acuerdo a lo que le hayamos pasado como parámetro en la url.
  res.status(200).send(`Ruta con el equipo con id: ${id}`);
});

// Prueba de una ruta con POST
teamRouters.post("/", (req, res) => {
  res.status(200).send("Equipo creado correctamente");
});

module.exports = teamRouters;
