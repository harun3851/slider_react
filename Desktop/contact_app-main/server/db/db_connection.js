const mongoose = require('mongoose');

const connectDB = async () => {


    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
            console.log("MongoDB connected!");
    }
    catch(err){
        console.log("You are not connected: " + err);
    };
}

module.exports = connectDB;