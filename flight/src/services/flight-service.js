const {FlightRepository, AirplaneRepository}=require("../repository/index")
const{compareTime}=require("../utils/helper")
class FlightService{

    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightRepository=new FlightRepository();
    }

    async createFlight(data)
    {
        try{
            if(!compareTime(data.arrivalTime,data.departureTime))
            {
                throw{error:"Arrival time can't be less than departure time"};
            }else{
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight=await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
            return flight;
            }

        }catch(err)
        {
            console.log("something wrong in flight services");
            throw{err};
        }
    }

    async getFlightData(data)
    {
        try{
           const flights=await this.flightRepository.getAllFlight(data);
          return flights;
        }catch(err)
        {
            console.log("something wrong in flight services");
            throw {err};
        }
    }

    async getFlight(flightId)
    {
        console.log(flightId);
        try{
           const flight=await this.flightRepository.getFlight(flightId);
          return flight;
        }catch(err)
        {
            console.log("something wrong in flight services");
            throw {err};
        }
    }

    async updateFlight(flightId,data)
    {
        try{
           const response=await this.flightRepository.updateFlight(flightId,data);
          return response;
        }catch(err)
        {
            console.log("something wrong in flight services");
            throw {err};
        }
    }

}

module.exports=FlightService;