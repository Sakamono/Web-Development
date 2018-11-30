var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name : "Cloud's Rest", 
        image : "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f5c47ca2e8b4bd_340.jpg",
        description: "Beautiful!",
    },
    {
        name : "Stary Night", 
        image : "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f5c47ca2e8b4bd_340.jpg",
        description: "The stars are shining like your smile!",
    },
    {
        name : "Mountain Views", 
        image : "https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg",
        description: "A good place to relax!",
    },
    
    ]

function seedDB() {
    // remove all campgrounds
        Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campground!");
         // add a few campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create({
                        text : "This place is great, but I wish there was internet.",
                        author: "Homer"
                    }, function(err, comment) {
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created a new comment!");
                        }
                        
                    });
                }
        });
    });  
});
       
}

module.exports = seedDB;
