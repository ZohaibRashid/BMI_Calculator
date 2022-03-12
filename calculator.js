//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));


app.get("/", function(req,res){
 res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var result = (num1 + num2);
  res.send("The result is " + result);
});

app.get("/bmicalculator", function(req,res){
 res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
 var weight = parseFloat(req.body.weight);
 var height = parseFloat(req.body.height);
 var bmi = weight/Math.pow(height,2);
bmi = bmi.toFixed(2);

if(bmi< 18.5){
  res.send("Your BMI is "+ bmi + ". You are underweight");
}

else if(bmi >= 18.5 && bmi <= 24.9){
  res.send("Your BMI is "+ bmi + ". You are in a great shape");
}

else if(bmi >= 25 && bmi <= 29.9){
  res.send("Your BMI is "+ bmi + ". You are overweight");
}

else{
  res.send("Your BMI is "+ bmi + ". You are Obese");

}

});

app.listen(3000,function(){
  console.log("server listening on port 3000");
});
