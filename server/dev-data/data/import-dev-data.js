const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const Vehicle = require('../../models/vehicle');

dotenv.config({ path: "./config.env" });

const db = process.env.DATABASE;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

// READ JSON FILE
const vehicles = JSON.parse(fs.readFileSync(`${__dirname}/vehicles.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importDate = async () => {
    try {
        await Vehicle.create(vehicles);
        console.log('Data successfull loaded');
    } catch (error) {
        console.log(error)
    };
    process.exit()
};

// DELETE ALL DATA FROM DB
const deletData = async () => {
    try {
        await Vehicle.deleteMany();
        console.log('Data successfull deleted');
    } catch (error) {
        console.log(error)
    }
    process.exit()
}


if(process.argv[2] === '--import'){
    importDate();
} else if(process.argv[2] === '--delete') { 
    deletData();
}

