const Vehicle = require('../models/vehicle');

exports.getAllVehicle = async (req, res, next) => {
    try {
        const vehicles = await Vehicle.find();

        res.status(200).json({
            status: 'success',
            results: vehicles.length,
            data: {
                vehicles
            }
        });
    } catch (error) {
        res.status(200).json({
            status: 'fail',
            message: error
        });
    }
};

exports.getOneVehicle = async (req, res, next) => {
    const vehicleId = req.params.id;

    try {
        const vehicle = await Vehicle.findById(vehicleId);

        if(!vehicle) {
            throw new Error('No vehicle found with that ID')
        };

        res.status(200).json({
            status: 'success',
            data: {
                vehicle
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
};

exports.createVehicle = async (req, res, next) => {
    // const { type, summary, price, images } = req.body;

    const newVehicle = await Vehicle.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            vehicle: newVehicle
        }
    })
};

exports.updateVehicle = (req, res, next) => {
    try {
        const vehicle = Vehicle.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!vehicle) {
            throw new Error('No vehicle found with that ID')
        };

        res.status(200).json({
            status: 'success',
            data: {
                vehicle
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
};

exports.deleteVehicle = (req, res, next) => {
    try {
        const vehicle = Vehicle.findByIdAndDelete(req.params.id);

        if(!vehicle) {
            throw new Error('No vehicle found with that ID')
        };

        res.status(200).json({
            status: 'success',
            data: null
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}