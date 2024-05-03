//create database in mongoDB compass  my queries 
//show dbs
//use student
//db.createCollection('Profile')
//db.profile.insertOne({name:"dhanu",email:dhanu@gmail.com,city:"pune"})
//

//create file mongodb.js
//run npm i mongodb
//npm i express

const dbConnect=require('./mongodb')
const express=require('express')
const app=express();


app.get('/',async(req,res)=>{

let result=await dbConnect();
result=await result.find().toArray();
res.send(result);
})
app.listen(3000);
