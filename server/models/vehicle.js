const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'You must pick a type'],
        enum: ['bike', 'scooter']
    },
    summary: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'A vehicle must have a price']
    },
    images: [String],
    address: {
        type: String,
        required: [true, 'A vehicle must have a address']
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);