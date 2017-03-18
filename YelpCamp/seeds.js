var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:  "Cloud's Rest",
        image: "https://farm3.staticflickr.com/2058/32163448053_79bf18abd3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum augue ut sollicitudin dictum. Pellentesque arcu diam, finibus eu felis non, imperdiet pretium tortor. Curabitur ultricies fringilla purus, a scelerisque dolor laoreet interdum. In hac habitasse platea dictumst. Proin non arcu orci. Maecenas a facilisis leo. In placerat et elit at vulputate. Sed et risus augue. Aenean dui urna, aliquam ut nibh vitae, gravida tempus urna. Nullam sagittis imperdiet feugiat."
    },
    
    {
        name:  "Mountain Lake Rest",
        image: "https://farm7.staticflickr.com/6025/5982544974_a833969370.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum augue ut sollicitudin dictum. Pellentesque arcu diam, finibus eu felis non, imperdiet pretium tortor. Curabitur ultricies fringilla purus, a scelerisque dolor laoreet interdum. In hac habitasse platea dictumst. Proin non arcu orci. Maecenas a facilisis leo. In placerat et elit at vulputate. Sed et risus augue. Aenean dui urna, aliquam ut nibh vitae, gravida tempus urna. Nullam sagittis imperdiet feugiat."
    },
    
    {
        name:  "Canyon Floor",
        image: "https://farm5.staticflickr.com/4089/4952600040_19342714e1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum augue ut sollicitudin dictum. Pellentesque arcu diam, finibus eu felis non, imperdiet pretium tortor. Curabitur ultricies fringilla purus, a scelerisque dolor laoreet interdum. In hac habitasse platea dictumst. Proin non arcu orci. Maecenas a facilisis leo. In placerat et elit at vulputate. Sed et risus augue. Aenean dui urna, aliquam ut nibh vitae, gravida tempus urna. Nullam sagittis imperdiet feugiat."
    }
];


function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
}

module.exports = seedDB;