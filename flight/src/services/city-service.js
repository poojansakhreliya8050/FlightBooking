const { CityRepository } = require("../repository/index");

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (err) {
            console.log("something went wrong at service layer");
            throw {err}
        }
    }

    async deleteCity(cityId) {
        try {
            const res = await this.cityRepository.deleteCity(cityId);
            return res;
        } catch (err) {
            console.log("something went wrong at service layer");
            throw {err}
        }
    }


    async updateCity(cityId,data) {
        try {
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (err) {
            console.log("something went wrong at service layer");
            throw {err}
        }
    }


    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (err) {
            console.log("something went wrong at service layer");
            throw {err}
        }
    }

    async getAllCities(filter){
        try {
            const cities= await this.cityRepository.getAllCities({name:filter.name});
            return cities;
        } catch (err) {
            console.log("something went wrong at service layer");
            throw {err}
        }
    }
}

module.exports=CityService
