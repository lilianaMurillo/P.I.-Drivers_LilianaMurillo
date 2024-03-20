// Este archivo tiene la responsabilidad del servidor. Es el punto de entrada de la aplicación, y se encarga de configurar el servidor, cargar las variables de entorno, conectar la base de datos y definir las rutas de la API.

const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev")); // aquí le decimos que se va a usar morgan en modo dev. Esto es para que muestre en consola las peticiones que se hacen al servidor.
server.use(express.json());
server.use(cors());
server.use(router); // aquí le decimos que use el router que definimos en el archivo routes/index.js

module.exports = server;
