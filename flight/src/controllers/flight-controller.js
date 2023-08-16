const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: "successfully created a flight"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to create a flight",
            err: err
        })
    }
}
const getAll = async (req, res) => {
    try {
        const flight = await flightService.getFlightData(req.query);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: "successfully fetched a flights"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to fetch the flights",
            err: err
        })
    }
}
const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: "successfully fetched a flights"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to fetch the flights",
            err: err
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.id,req.body);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: "successfully updated a flights"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to updated the flights",
            err: err
        })
    }
}

module.exports = {
    create,
    getAll,
    get,
    update
}