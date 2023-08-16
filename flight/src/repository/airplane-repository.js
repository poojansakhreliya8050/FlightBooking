const { Airplane } = require("../models/index");

class AirplaneRepository {

    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (err) {
            console.log("something wrong in airplane repository layer..");
            throw {err};
        }
    }

}

module.exports = AirplaneRepository