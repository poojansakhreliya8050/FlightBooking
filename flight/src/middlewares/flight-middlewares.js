const validateCreateFlight=(req,res,next)=>{
    if(!req.body.flightNumber || !req.body.airplaneId || !req.body.arrivalAirportId || !req.body.departureAirportId || !req.body.arrivalTime || !req.body.departureTime || !req.body.price)
    {
        return res.status(400).json({
            data:{},
            success:false,
            message:"invalid request body for create flight",
            err:"missing mandotory properties to create a flight"
        })
    }
    next();
}

module.exports={validateCreateFlight};