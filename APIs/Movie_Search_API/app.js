var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?s=california", function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.render("results", {parsedData: parsedData});
        }
    });
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has Started!!!");
});