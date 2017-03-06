var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");


//POST title, content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);



// var newUser = new User({
//     email: "Mario@utb.edu",
//     name: "Mario Peña Jr"
// });

// newUser.posts.push({
//     title: "How to be a better developer",
//     content: "We are what we repeately do. Greatness then is not an act but a habit"
// });

// newUser.save(function(err,user){
//   if(err){
//       console.log(err);
//      } else{
//           console.log(user);
//   }  
// });

// var newPost = new Post({
//     title: "Reflection on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err,post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }

// });

User.findOne({name: "Mario Peña Jr"}, function(err, user){
   if(err){
    //   console.log(err);
   } else {
       user.posts.push({
           title: "3 things I love",
           content: "Life, learning, my family"
       });
       user.save(function(err,user){
         if(err){
            console.log(err);
         } else {
          console.log(user);
         }  
      });
    }
});