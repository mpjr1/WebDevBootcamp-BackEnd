var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addFriend", function(req, res){
    res.send("You have reached the POST Route");
});


app.get("/friends", function(req, res){
    var friends = ["Mario", "Josue", "Jesus", "Cheko"];
   res.render("friends", {friends: friends}); 
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Node.js server is running...");
});