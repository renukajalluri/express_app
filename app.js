const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

console.log(__dirname)


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/",(req,res)=>{

    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    var result = num1+num2;
    res.send("the result is " + result);
})
  
app.get("/bmicalc",(req,res)=>{
    res.sendFile(__dirname + "/bmicalculator.html");
})
app.post("/bmicalc",(req,res)=>{
    var w1 = parseFloat(req.body.weight);
    var h1 = parseFloat(req.body.height);
    var bmi = w1/(h1*h1);
    res.send("the calculation is " + bmi);
});
app.listen(3000,()=>{
    console.log("listening on port 3000");    
})
