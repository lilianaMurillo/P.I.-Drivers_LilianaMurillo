const axios = require("axios");
const server = require("./src/server");
const { getTeamsController } = require("./src/controllers/teamsController");
const { conn } = require("./src/db.js");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(async () => {
    await getTeamsController();
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
