const parser = require('json-2-csv');
const express = require('express');
const crashdays = require('./crashdays');
const presence = require('./present');
// const project = require('./Recruitment/project');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(express.static('public'));
app.listen(6000);

mongoose.connect("mongodb://localhost:4000/innogeeks");

app.get('/innogeeks',(req,res)=>{
    res.sendFile("index.html",{root:__dirname});
    console.log("Innogeeks Landing Sending");
});
// app.get('/attendance',(req,res)=>{
//     res.sendFile("attendance.html",{root:__dirname});
//     console.log("Attendance Page Sending");
// });
// app.post('/submit',async (req,res) => {
//     console.log(validate(req.body));
//     if(validate(req.body) == true){
//         console.log(redundancyCheck(req.body));
//         if(await redundancyCheck(req.body) == true){
//             await createNewEntry(req.body);
//             res.sendFile("confirm.html",{root:__dirname});
//         }else{
//             res.sendFile("multiple.html",{root:__dirname});
//         }
        
//     }
//     else{
//         res.sendFile("invalid.html",{root:__dirname});
//     }
//     console.log(req.body);
//     console.log("Recieved Page Sending");
// })

app.get('/panel-private',(req,res)=>{
    res.sendFile("panel.html",{root:__dirname});
});

app.get('/download',async (req,res)=>{

    const d = new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'}).split(',');
    const date = d[0].replaceAll('/','-');
    const time = d[1].split(' ');
    const filename = `Responses_${date}_${time[1].replaceAll(':','-')}_${time[2]}.csv`;

    var out;
    await crashdays.find().lean().exec(function (err, users) {
        parser.json2csv(users, (err,csv)=>{
            if(err){
                throw err;
            }
            console.log('Sending Registration CSV');
            res.attachment(`${filename}.csv`).send(csv);
        })

        //fs.writeFileSync('public/myjsonfile.json', out,{encoding:'utf8'});
    });
    console.log(out);
    // const cursor = crashdays.find({});
});

app.get('/download-attend',async (req,res)=>{

    const d = new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'}).split(',');
    const date = d[0].replaceAll('/','-');
    const time = d[1].split(' ');
    const filename = `Attendance_${date}_${time[1].replaceAll(':','-')}_${time[2]}.csv`;

    var out;
    await presence.find().lean().exec(function (err, users) {
        parser.json2csv(users, (err,csv)=>{
            if(err){
                throw err;
            }
            console.log('Sending Attendance CSV');
            res.attachment(`${filename}.csv`).send(csv);
        })

        //fs.writeFileSync('public/myjsonfile.json', out,{encoding:'utf8'});
    });
    console.log(out);
    // const cursor = crashdays.find({});
});

// async function createNewEntry(response){
//     try{
//         const d = new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'});
//         const entry = new crashdays({name:response.name,email:response.email,number:response.number,branch:response.branch,year:response.year,residence:response.residence,domain:response.domain,date:d});
//         await entry.save();
//         console.log("Entry added!");
//     }catch(e){
//         console.log(e);
//     }
// }

// async function redundancyCheck(response){
//     const obj = await crashdays.findOne({email:response.email});
//     console.log("found: ");
//     console.log(obj);
//     if(obj!=null){
//         return false;
//     }
//     return true;
// }

// function validate(response){

//     if(response.name === '' || response.name == null){
//         console.log('1');
//         return false;
//     }

//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
//     if(!re.test(String(response.email).toLowerCase())){
//         console.log('2');
//         return false;
//     }

//     if(response.number === '' || response.number == null){
//         console.log('3');
//         return false;
//     }

//     for(let char of String(response.number).toLowerCase()){
//         if(!(char >= '0' && char<= '9')){
//             console.log('4');
//             return false;
//         }
//     }

//     if(response.branch == 'Branch'){
//         console.log('5');
//         return false;
//     }
    
//     if(response.year == 'Year'){
//         console.log('6');
//         return false;
//     }

//     if(response.residence === '' || response.residence == null){
//         console.log('7');
//         return false;
//     }

//     return true;

// }

// app.post('/entry',async (req,res)=>{
    
//     const data = req.body;
//     try{
//         const d = new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'});
//         const entry = new project({name:data.name,domain:data.domain,title:data.title,stack:data.stack,link:data.git,date:d});
//         await entry.save();
//         res.sendFile("confirmRec.html",{root:__dirname});
//     }
//     catch(e){
//         console.log(e);
//         res.sendFile("invalid.html",{root:__dirname});
//     }
// })
