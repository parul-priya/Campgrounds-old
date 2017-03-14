var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name : "Salmon Creek", image : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS08PIMeHilemRxR45YxdmbjLpGRgmmLKB2Ftlhfwz1shQPjxmE"},
        {name : "Granite Hill", image : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ0kIao3Ve8KxfmMxjoYVD8Jh3vg_wqbd2VIbncRuMwr16h-Gr1dQ"},
        {name : "Mountain Goat's Rest", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzl7QUG63jC5r8KQNzVBqqIlqMBVS2lwGdBWEKsQCBNYIA0i7"},
        {name : "Camp Firefly", image : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRm77T5b0U53-A9Ynwld3THe58UCqgpIOkPM2H3SgRqw4aZxfnm"},
        {name : "Holiday RV", image : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5x5ldmGNe4nu_yxrIR-KhIUscpyRfBrGQ345LRPL0JTnCF_wK"}
        ];

app.get("/", function(req, res){
    res.render("landing");
});


app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds : campgrounds});
});


app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});


app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image =req.body.image;
    var newCampground = {name : name, image : image}; //you have to create this object here, since the actual data is also an array of objects!
 
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});


app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Yelp Camp server started.......");
})