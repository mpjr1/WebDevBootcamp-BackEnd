var express    = require("express");
var app        = express();
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");
var seedDB     = require("./seeds");



mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

app.get("/", function(req, res){
     res.render("landing");
});


// INDEX - Show all campgrounds
app.get("/campgrounds", function(req, res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allcampgrounds});
        }
    });
        
});


// CREATE - Add new campground to Database
app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    //Create new campground and save to database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
          console.log(err);
        } else {
           res.redirect("/campgrounds");
        }
    });
});


// NEW - Show form to create campground
app.get("/campgrounds/new", function(req, res) {
    res.render("campgrounds/new");
});

// SHOW - Show more info about one background
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log("foundCampground");
            res.render("campgrounds/show", {campground: foundCampground});
        }
    })
    
});

//======================
//  COMMENTS ROUTES
//======================

app.get("/campgrounds/:id/comments/new", function(req, res){
    //find campgrounds by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
        res.render("comments/new", {campground: campground});
        }
    });
} );

app.post("/campgrounds/:id/comments", function(req, res){
    //lookip camground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
    //create new comment
    
    //connect new comment to campgrounds
    
    //redirect to campgrounds show page
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started");
});