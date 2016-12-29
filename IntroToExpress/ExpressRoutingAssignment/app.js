var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assigment");
})

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "oink!",
        cow: "moo!",
        dog: "woof!",
        duck: "quak!",
        cat: "I hate you human"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    // using if/else statements is long    
    // if (animal === "pig"){
    //     sound = "oink";
    // } else if(animal === "cow"){
    //     sound = "moo";
    // } else if(animal === "dog"){
    //     sound = "woof";
    // } else if(animal === "duck"){
    //     sound = "quak!";
    // }
    res.send("The " + animal + " says '" + sound + "'");

});


app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    
    for(var i = 0; i < times; i++){
        result += message + " ";
    }
    
    res.send(result);
});


app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Node.js server running...");
});