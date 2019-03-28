//models index
const Mongoose = require('./../config/db').Mongoose,
    Schema = Mongoose.Schema;

const userSchema = new Schema({
    userId : {
        type : String,
        trim : true
    },
    name : {
        type : String,
        trim : true
    },
    phone : {
        type : String,
        trim : true
    },
    fathersName : {
        type : String,
        trim : true
    },
    mothersName : {
        type : String,
        trim : true
    },
    vehicleModel : {
        type : String,
        trim : true
    },
    vehicleNumber : {
        type : String
    },
    emi : {
        type : Number
    },
    isBlocked : {
        type : Boolean,
        default : false
    }
},{
    timestamps: true
});
const user = Mongoose.model('user',userSchema);
module.exports = user;
