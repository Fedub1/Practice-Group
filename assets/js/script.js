// This is our Trail API key
$("button").click, function() {
  var trailInfo = $(this).attr(".Trails");

var APIKey = "200888911-caa38fd7e1941e6d8cc7a5b9d2a5cc93";

// Here we are building the URL we need to query the database
var queryURL = "https://www.mtbproject.com/data/get-trails?lat=35.2271&lon=-80.431&maxDistance=20&key=" + APIKey;
  

$( document ).ready( function() {
     
     
$.ajax({
  url: queryURL,
  method: "GET"
})
.then(function(response){
 console.log(queryURL);

 console.log(response);
var results = response.data;

for (var i = 0; i < results.length; i++) {

  var trailInfo = $("<div>");
  var p = $("<p>").text("Rating: " + results[i].rating);

  $("#trail-info").html("Hello" + trail);
  $(".trailName").text("Name" + response.trails.name);
  $(".trailRating").text("Name" + response.trails.stars);
  $(".trailImg").text("Name" + response.trails.imgSmall);
  $(".trailLength").text("Name" + response.trails.length);
  $(".trailConditionStatus").text("Name" + response.trails.conditionStatus);
  $(".railCondition").text("Name" + response.trails.conditionDetails);
}}
)},)}