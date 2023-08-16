const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({ 
            data: {},
            success: false,
            message: "not able to create city",
            err: err
        })
    }
}

const destroy = async (req, res) => {
    try {
        const result = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: result,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to delete city",
            err: err
        })
    }
}

const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully fetched a city",
            err: {}
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to fetched city",
            err: err
        })
    }
}

const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully updated a city",
            err: {}
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to update city",
            err: err
        })
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(201).json({
            data: cities,
            success: true,
            message: "Successfully fetched a cities",
            err: {}
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to fetched cities",
            err: err
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}