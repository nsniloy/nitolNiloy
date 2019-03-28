const userModel = require('./../models/user');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const projection = {
    createdAt: 0,
    updatedAt: 0,
    __v: 0
}

const allUser = async (req,res) => {
    try{
        let users = await userModel.find({},projection);
        if(users){
            res.status(200).json({
                data : users,
                success : true
            });
        }
        else {
            res.status(200).json({
                data : null,
                success : true
            });
        }
    }catch(err){
        res.status(400).json({
          data : null,
          success : false,
          message : "Internal Server Error Occurred."
        });
    }
}


const userById = async (req,res) => {
    try{
        let user = await userModel.findOne({userId : req.body.userId},projection);
        if(user){
            res.status(200).json({
                data : user,
                success : true
            });
        }
        else {
            res.status(200).json({
                data : null,
                success : true
            });
        }
    }catch(err){
        res.status(400).json({
          data : null,
          success : false,
          message : "Internal Server Error Occurred."
        });
    }
}

const pay = async (req,res) => {
    try{
        let user = await userModel.updateOne({userId : req.body.userId},{$set : {emi : req.body.emi}},projection);
        if(user){
            res.status(200).json({
                data : user,
                success : true
            });
        }
        else {
            res.status(200).json({
                data : null,
                success : true
            });
        }
    }catch(err){
        res.status(400).json({
          data : null,
          success : false,
          message : "Internal Server Error Occurred."
        });
    }
}


const createUser = async (req,res) => {
    try{
        console.log(req.body);
        let user = await userModel(req.body);
        if(user && user.length !== 0){
            user.save();
            res.status(200).json({
                data : user,
                success : true
            });
        }
        else {
            res.status(200).json({
                data : null,
                success : true
            });
        }
    }catch(err){
        res.status(400).json({
          data : null,
          success : false,
          message : "Internal Server Error Occurred."
        });
    }
}

module.exports =  {
    allUser,
    pay,
    userById,
    createUser
};
