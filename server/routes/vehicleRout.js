const express = require('express');
const vehicleController = require('../controller/vehicleController');

const router = express.Router();  

router.route('/')
      .get(vehicleController.getAllVehicle)
      .post(vehicleController.createVehicle)

router.route('/:id')
      .get(vehicleController.getOneVehicle)
      .patch(vehicleController.updateVehicle)
      .delete(vehicleController.deleteVehicle)

module.exports = router;