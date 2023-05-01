const mongoose = require("mongoose");

// uri = "mongodb://0.0.0.0:27017/APIDB";         

const connectDB = (uri) =>{
    console.log("DB connected");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB ;

