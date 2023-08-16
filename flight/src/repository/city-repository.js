const { City } = require("../models/index")
const {Op}=require("sequelize")
class Cityrepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (err) {
            console.log("something went wrong in the repository layer");
            throw {err};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })

        } catch (err) {
            console.log("something went wrong in the repository layer");
            throw {err};
        }
    }
    async updateCity(cityId, data) {
        try {
            //  const city=await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            //  });

            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;

        } catch (err) {
            console.log("something went wrong in the repository layer");
            throw {err};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city
        } catch (err) {
            console.log("something went wrong in the repository layer");
            throw {err};
        }
    }
    async getAllCities(filter) {
        console.log(filter);
        try {
            if(filter.name)
            {
                return City.findAll({
                    where:{
                        name:{
                            [Op.like]:`%${filter.name}%`
                        }
                    }
                })
            }
            else{
             return await City.findAll();
            }

        } catch (err) {
            console.log("something went wrong in the repository layer");
            throw {err};
        }
    }
}

module.exports = Cityrepository;