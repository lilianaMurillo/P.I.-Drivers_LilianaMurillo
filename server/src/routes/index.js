const { Router } = require("express");
const axios = require("axios");
const { Driver, Team } = require("../db");

const router = Router();

const getApiInfo = async () => {
    const apiUrl = await axios.get("http>//localhost:5000/drivers");
    cpmst apiInfo = await apiUrl.data.map(el => {
        return {
            id: el.id,
            forename: el.forename,
            surname: el.surname,
            dob: el.dob,
            nationality: el.nationality,
            image: el.image,
            description: el.description,

        };
    });
    return apiInfo;
};

const getDBInfo = async () => {
    return await Driver.findAll({
        include: { model: Team, attributes: ["name"],
    through: {
        attributes: [],
    },
    }
    });
    };

    const getAllDrivers = async () => {
        const apiInfo = await getApiInfo();
        const dbInfo = await getDBInfo();
        const allInfo = apiInfo.concat(dbInfo);
        return allInfo;
    }

    router.get("/drivers", async (req, res) => {
        const name = req.query.name
        const allDrivers = await getAllDrivers();
        if (name) {
            const driverName = await allDrivers.filter( el => el.name.toLowerCase().includes(name.toLowerCase()));
            driverName.length ? res.status(200).send(driverName) : res.status(404).send("Driver not found");
        } else {
            res.status(200).send(allDrivers);
        }
    });


module.exports = router;
