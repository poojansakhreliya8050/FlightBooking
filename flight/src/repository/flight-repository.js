const { Op } = require("sequelize");
const { Flights } = require("../models/index");

class FlightRepository {

    #createFilter(data)
    {
        let filter={};
        if(data.arrivalAirportId)
        filter.arrivalAirportId=data.arrivalAirportId;

        if(data.departureAirportId)
        filter.departureAirportId=data.departureAirportId;

        if(data.minPrice && data.maxPrice)
        {
            Object.assign(filter,{price:{[Op.between]:[data.minPrice,data.maxPrice]}});
        }
        else{

            if(data.minPrice)
            Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
    
            if(data.maxPrice)
            Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
        }


        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (err) {
            console.log("something wrong on flight repository layer..");
            throw { err }
        }
    }
    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (err) {
            console.log("something wrong on flight repository layer..");
            throw { err }
        }
    }
    async getAllFlight(filter) {
        try {
            const filterObj=this.#createFilter(filter);
            if (filter) {
                return await Flights.findAll({
                    where:filterObj
                });
            }
            else {
                return await Flights.findAll();
            }
        } catch (err) {
            console.log("something wrong on flight repository layer..");
            throw { err }
        }
    }
    async updateFlight(flightId,data) {
        try {
            await Flights.update(data,{
                where:{
                    id:flightId
                }
            });
            return true;
           
        } catch (err) {
            console.log("something wrong on flight repository layer..");
            throw { err }
        }
    }

}
module.exports = FlightRepository;