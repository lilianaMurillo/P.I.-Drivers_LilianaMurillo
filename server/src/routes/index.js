/* En este archivo se definen las rutas de la API.
Se importa el módulo Router de express, se crea una instancia de Router y
se definen las rutas con los métodos HTTP que se necesiten.
Luego se exporta el router para que pueda ser utilizado en el archivo server.js.*/

const { Router } = require("express");
//Importar todos los routers;
//Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Prueba de una ruta
router.get("/drivers", (req, res) => {
  res.status(200).send("Ruta con todos los pilotos");
});

// Prueba de una ruta por params
router.get("/drivers/:id", (req, res) => {
  const { id } = req.params; // aquí estamos extrayendo el id de los params por medio de una desestructuración, la cual es de acuerdo a lo que le hayamos pasado como parámetro en la url.
  res.status(200).send(`Ruta con el piloto con id: ${id}`);
});

// Prueba de una ruta con POST
router.post("/drivers", (req, res) => {
  res.status(200).send("Piloto creado correctamente");
});

module.exports = router;

// NOTA: Para seleccionar todas las palabras iguales para cambiarlas de una vez, seleccionar la palabra y presionar Ctrl + Shift + L. Esto seleccionará todas las palabras iguales en el documento. Luego, se puede cambiar el nombre de todas las palabras seleccionadas al mismo tiempo. Esto es útil para cambiar el nombre de las variables o funciones en un archivo.
