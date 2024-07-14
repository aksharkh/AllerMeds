const express = require("express");
const mongoose = required('mongoose');
const cors = required("cors")
const app = express();
const path =require('path');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/allermeds");

app.get("/", (req, res) =>{
    res.render("index");
});
app.get("/profile/:username/:age",(req, res)=>{
    res.send(`welcome , ${req.params.username} of age ${req.params.age}`);
});

app.listen(3001, () =>{
    console.log("it is running");
});