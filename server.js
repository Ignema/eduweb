
const express = require("express");

//let path = require("path");

const bcrypt = require("bcrypt");

const Video = require("./video");
const mongoose = require('mongoose');

const app = express();


app.use(express.static(__dirname));

app.use(express.urlencoded({extended: false}));


app.get("/",(req,res)=>{

    res.sendFile( __dirname + "/index.html");

});

// const video = new Video({

//     _id: mongoose.Types.ObjectId(),
//     title: "myVideo.mp4",
//     img: "/"

// })

// video.save();

app.get("/api/v1/videos",(req,res)=>{

    let video = {};

    Video.find().exec().then((val)=>{

        video = val;

        res.send(video);

    }).catch((err)=>{

        console.log(err);

    });

});

app.get("/admin",(req,res)=>{

    res.sendFile( __dirname + "/pages/admin.html");

});

app.post("/admin", (req,res)=>{

   if(req.body.username === "admin" && req.body.password === "admin"){

        res.send("Logged in")

   }else{

    res.redirect("/admin")

   }


});

app.listen(3000);