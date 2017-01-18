var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isCute: Boolean
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat ot the MongoDB

// var george = new Cat({
//     name: "Chongis",
//     age: 10,
//     isCute: true
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wront");
//     } else {
//         console.log("We saved a cat into the DB");
//         console.log(cat);
//         }
// });

Cat.create({
    name: "La Pinta",
    age: 11,
    isCute: true
}, function(err, element){
    if(err){
        console.log("There was an error");
    } else {
        console.log("Element created and saved");
        console.log(element);
    }
});

//retrieve all cats form the MongoDB. Console.log each one

Cat.find({}, function(err, element ){
    if(err){
        console.log("Oh No! Error!");
    } else {
        console.log("All the Cats");
        console.log(element);
    }
})