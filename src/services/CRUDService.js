const express = require("express")
import db from "../models"
import bcrypt from "bcrypt"
const saltRounds = bcrypt.genSaltSync(10);

let hashPassWord = async(pass)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let hashPassWord = await bcrypt.hashSync(pass, saltRounds);
            resolve(hashPassWord)
        }
        catch(e){
            reject(e)
        }
    })
     
}

let CreateNewUser =  (data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let passwordHass = await hashPassWord(data.password)
            await db.User.create({
                email: data.email,
                password: passwordHass,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phone,
                gender: data.gender === 1 ? true:false,
                roleId: data.role 
            })  
            resolve("Create new used succeed")
        }catch(e){
            reject(e)
        }
    })
}
let getAllDataUser = ()=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let user = await db.User.findAll({
                raw: true,
            });
            resolve(user)
        }catch(e){
            reject(e)
        }
    })
}

let getUserById =(id)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let user = await db.User.findAll({
                raw: true,
                where: {
                    id: id
                }
            });
            resolve(user)
        }catch(e){
            reject(e)
        }
    })
}
let updateUserById =(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            await db.User.update({ 
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phone,
            }, {
                where: {
                  id: data.id,
                },
              });
             
            resolve("Update used succeed")
        }catch(e){
            reject(e)
        }
    })
}
let deleteUserById =(id)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            await db.User.destroy({
                where: {
                  id: id
                }});
            resolve("Delete used succeed")
        }catch(e){
            reject(e)
        }
    })
}
module.exports ={
    CreateNewUser: CreateNewUser,
    getAllDataUser: getAllDataUser,
    getUserById: getUserById,
    updateUserById: updateUserById,
    deleteUserById: deleteUserById,
}