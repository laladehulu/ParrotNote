const express = require("express");
const app = express();
const fs = require('fs');

var bodyParser = require('body-parser')
const template = require('./template');
const html2pdf = require('./html2pdf')


app.use(express.json());
app.use('/api/downloads',express.static('pdfs'));
app.use(express.static('public'));

let count = 0;
app.post('/api/datatopdf',function(req,res){
    console.log("recieved data");
    console.log(req.body);
   // const Filename ='./pdfs'+req.connection.remoteAddress.toString().replace(+'.pdf';
   //console.log(req.connection.remoteAddress.match(/[0-9]+.+/)[0].replace(/\./g,'_'));
   html2pdf(template(req.body)).then((pdf =>{
    fs.writeFile('./pdfs/'+/*req.connection.remoteAddress.match(/[0-9]+.+/)[0].replace(/\./g,'_')*/'127_0_0_1'+'.pdf',pdf, "binary",function(err){
    
        if(err){
            console.log(err);
        }
   
        console.log("wrotefile");
        res.sendStatus(200).send(count);
    });
 
   })).catch(err=>console.log(err));
})
app.listen(25565);
var viewObjectLookLike={
    sections:[
        {
            questions:[{text:"hello",timeStamp:1},{text:"hello",timeStamp:1},{text:"hello",timeStamp:1},{text:"hello",timeStamp:1},{text:"hello",timeStamp:1},{text:"hello",timeStamp:1}],
            informations : []
        },
        {
        questions:[{text:"hi",timeStamp:1}],
        informations : []
        },
        {
            questions:[{text:"hello",timeStamp:1}],
            informations : []
            },
    {
        questions:[{text:"hello",timeStamp:1}],
        informations : []
        },        
    
    ]
    
}
console.log("server is running");

