const express = require("express")
import db from "../models"
import bcrypt from "bcrypt"
const saltRounds = bcrypt.genSaltSync(10);

let checkUserEmail=async (email)=>{
    return await db.User.findOne({
        where: { email: email },
        attributes :['email','password','roleid'],
        raw: true
    });
}

let handleUserLogin= (user)=>{
    let dataUser={}
    return new Promise(async(resolve,reject)=>{
        try{
            
            if(!user.email|| !user.password){
                resolve({
                    errCode: 1,
                    message: "Bạn chưa nhập email hoặc password",
                })
            }
            let yourData = await checkUserEmail(user.email)
            if(!yourData){
                dataUser.errCode = 2
                dataUser.message = " Email không tồn tại"
            }
            else{
                
                let checkPass =  bcrypt.compareSync(user.password, yourData.password);
                if(checkPass){
                    dataUser.errCode = 0
                    dataUser.message = "đăng nhập thành công"
                    delete yourData.password
                    dataUser.data = yourData
                }
                else{
                    dataUser.errCode = 1
                    dataUser.message = "Sai mật khẩu"
                } 
            }
            
            resolve({
                errCode: dataUser.errCode,
                message: dataUser.message,
                user: dataUser.data
            })
        }
        catch(e){
            reject(e)
        }
    })
}

module.exports={
    handleUserLogin: handleUserLogin
}