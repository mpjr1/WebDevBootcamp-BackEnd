# YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

    Each campground has:
    * Name
    * Image
    
# Layout and Basic Styling
* Create header and footer partials
* Add in Bootstrap


# Creating New Campgrounds
* Setup new Campgrounds POST route
* Add in body-parser
* Setup route to show form
* Add Basic unstyled form

#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add Navbar to all pages
* Style the new campgrounds page


#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so far
* Add a description to our campground model
* Show db.collection.drop()
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

#Add Seeds File
* Add a seeds.js file
* Run the seeds every time the server stards

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

#Style Show Page
* Add sidebar to show page
* Display comments nicely



RESTFUL ROUTES

name      url        verb       description
==========================================================
INDEX    /dogs       GET        Display a list of all dogs
NEW      /dogs/new   GET        Displays form to make a new dog
CREATE   /dogs       POST       Add new dog to DB
SHOW     /dogs/:id   GET        Show info about one dog

INDEX    /campgrounds
NEW      /campgrounds/new
CREATE   /campgrounds
SHOW     /campgrounds/:id

 Comments:
 NEW     /campgrounds/:id/comments/new      GET
 CREATE  /campgrounds/:id/comments          POST