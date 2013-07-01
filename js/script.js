$(document).ready(function(){
  var tiles = $(".tile");

  $("#board").on("click", ".tile", add_active);
});
var num_clicks = 0;
var selected = [];

var add_active = function() {
  var tile = $(this);
  if(tile.hasClass("active")) {
    return false;
  }
  if(selected.length==2){
    $(".active").removeClass("active");
    selected = [];
  }
  num_clicks++;
  tile.addClass("active");
  selected.push(tile);
};