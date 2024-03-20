require("dotenv").config(); // Se carga  el módulo "dotenv", que permite cargar variables de entorno desde un archivo ".env".
const { Sequelize } = require("sequelize"); // Se importa la clase Sequelize desde el módulo "sequelize".

//Se importan los módulos "fs" y "path" de Node.js, que permiten trabajar con el sistema de archivos y las rutas de archivos y directorios, respectivamente.

const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env; // Se extraen las variables de entorno con destructuring, definidas en el archivo ".env", utilizando "process.env".

// Se crea una instancia de Sequelize, con la configuración necesaria para conectarse a la base de datos. Se utiliza las variables de entorno extraídas anteriormente para definir el nombre de usuario, la contraseña y el host de la base de datos PostgreSQL.

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`,
  {
    logging: false, // Se desactiva el registro de consultas SQL.
    native: false, // se desactiva el uso de la implementación nativa de Node.js para PostgreSQL.
  }
);
//Carga dinámica de modelos
// Se obtiene el nombre del archivo actual ("basename"), sin la extensión ".js", utilizando el método "path.basename" de Node.js.
const basename = path.basename(__filename);

const modelDefiners = []; // Se crea un array vacío, que almacenará los "definers" de los modelos.

// Se leen los archivos del directorio "models" (excluyendo el archivo actual y los archivos ocultos), y se filtran los archivos que terminan con la extensión ".js". Luego, se recorre el array resultante, y se importa cada archivo, almacenando el "definer" de cada modelo en el array "modelDefiners".

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize)); // Se ejectua la función de cada modelo definido para asociarlo con la instancia de Sequelize creada anteriormente.

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Driver, Team } = sequelize.models;

// Relaciones
// Un equipo tiene muchos pilotos y un piloto puede pertenecer a varios equipos, por lo que la relación es de muchos a muchos.

Team.belongsToMany(Driver, { through: "driver_team" });
Driver.belongsToMany(Team, { through: "driver_team" });

//Se exportan los modelos y la instancia de conexión sequelize para que estén disponibles para su uso en otros archivos.

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
