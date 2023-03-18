//const parser = require('json-2-csv');
const express = require('express');
const choice = require('./choice');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.listen(6969);

mongoose.connect("mongodb://localhost:4000/innogeeks");

app.get('/projects',(req,res)=>{
    res.sendFile("index.html",{root:__dirname});
    console.log("Innogeeks Landing Sending");
});

app.get('/innogeeks',(req,res)=>{
    res.sendFile("closed.html",{root:__dirname});
    console.log("Innogeeks Landing Sending");
});


app.post('/entry',async (req,res)=>{
    
    const data = req.body;

    try{
        const d = new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'});
        const entry = new choice({uid:data.uid,name:data.name,libid:data.libid,email:data.email,phone:data.phone,domain1:data.domain1,domain2:data.domain2,domain3:data.domain3,date:d});
        await entry.save();
        res.sendFile("confirm.html",{root:__dirname});
    }
    catch(e){
        console.log(e);
        res.sendFile("invalid.html",{root:__dirname});
    }
})
