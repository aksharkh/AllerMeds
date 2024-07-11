const express = require("express");
const app = express();
const mongoose =require('mongoose');
const UserModel = require("./models/Users");

mongoose.connect('mongodb+srv://akshar:akshar1234@cluster0.ufdkkbq.mongodb.net/');

app.get("/getUsers", (req, res) =>{
    UserModel.find({}, (err, result) =>{
        if (err) {
            res.json(err);
        }else{
            res.json(result);
        }

    });
});

app.listen(3001, () =>{
    console.log("hello!")
});