var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isCute: Boolean
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat ot the MongoDB


//retrieve all cats form the MongoDB. Console.log each one