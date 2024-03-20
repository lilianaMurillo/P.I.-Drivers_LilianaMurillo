/* En este archivo se definen las rutas de la API.
Se importa el módulo Router de express, se crea una instancia de Router y
se definen las rutas con los métodos HTTP que se necesiten.
Luego se exporta el router para que pueda ser utilizado en el archivo server.js.*/

const { Router } = require("express");
const driverRouters = require("./driverRoutes");
const teamRouters = require("./teamRouters");
const router = Router();

router.use("/drivers", driverRouters);
router.use("/teams", teamRouters);

module.exports = router;

// NOTA: Para seleccionar todas las palabras iguales para cambiarlas de una vez, seleccionar la palabra y presionar Ctrl + Shift + L. Esto seleccionará todas las palabras iguales en el documento. Luego, se puede cambiar el nombre de todas las palabras seleccionadas al mismo tiempo. Esto es útil para cambiar el nombre de las variables o funciones en un archivo.
