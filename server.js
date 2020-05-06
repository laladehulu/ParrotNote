const express = require("express");
const app = express();
const fs = require('fs');

var bodyParser = require('body-parser')
const template = require('./template');
const html2pdf = require('./html2pdf')


app.use(express.json());

app.use('/api/downloads',express.static('pdfs'))
app.use(express.static('public'));

let count = 0;
app.post('/api/datatopdf',function(req,res){
    console.log("recieved data");
    console.log(req.body);
    var filePath = '';
   // const Filename ='./pdfs'+req.connection.remoteAddress.toString().replace(+'.pdf';
   //console.log(req.connection.remoteAddress.match(/[0-9]+.+/)[0].replace(/\./g,'_'));
   if(ValidateIPaddress(req.connection.remoteAddress)){
    filePath= '/pdfs/'+req.connection.remoteAddress.replace('.','_')+'.html';}
    else{
        filePath = '/pdfs/HahaYourIPIsBroken.html';
    }
    console.log(req.connection.remoteAddress);

  fs.writeFile('.'+filePath,template(req.body),//Use template to get the domstring
        function(err) {
            if(err){
                console.log(err,"error");
            }

            console.log("wrotefile");//respond and the client will send another request to the file
            res.sendFile(__dirname+filePath)
    });
   /*html2pdf(template(req.body)).then((pdf =>{
    fs.writeFile('./pdfs/'+req.connection.remoteAddress.match(/[0-9]+.+/)[0].replace(/\./g,'_')'127_0_0_1'+'.pdf',pdf, "binary",function(err){
    
      
    });
 
   })).catch(err=>console.log(err));*/
})
function ValidateIPaddress(ipaddress) {  
    if (/^(([0-9]+\.)+)+$/.test(ipaddress)) {  
      return (true)  
    }  
    console.log(ipaddress," : invalid IP address!")  
    return (false)  
  }  
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

