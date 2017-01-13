var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3844/15335755172_33dec7e209.jpg"},
        {name: "Isla Blanca", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"}
        ];
        
        res.render("campgrounds", {campgrounds: campgrounds});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started");
});