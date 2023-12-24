const { emit } = require("nodemon")
const db = require("../models/index")
const UserService = require('../services/UserService')

let handleUserLogin=async(req,res)=>{
    let data = await UserService.handleUserLogin(req.body)
    return res.status(200).json({
        data
    })
}
module.exports={
    handleUserLogin: handleUserLogin
}