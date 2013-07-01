$(document).ready(function(){
  var tiles = $(".tile");

  $("#board").on("click", ".tile", handle_click);

}); //end of doc ready function

//Global Variables
var num_clicks = 0;
var selected = [];

var handle_click = function() {
  var tile = $(this);
  if(tile.hasClass("active") || tile.hasClass("matched")) {
    return false;
  }
  if(selected.length==2){
    $(".tile.active").removeClass("active");
    selected = [];
  }
  num_clicks++;
  tile.addClass("active");
  selected.push(tile);
  if(selected.length ==2 && is_match()){
    $.each(selected, function(k,v){
      $(v).addClass("matched");
      }//ends loop function
    ); // ends each loop
    }// ends if statement
  if($(".matched").length == $(".tile").length) {
    alert("you found all the matches in "+num_clicks+" clicks!");
  }
};




var is_match = function() {
  // if(selected[0].find("img").attr("src") == selected[1].find("img").attr("src")){
  //   return true;
  // }
  // else {
  //   return false;
  // }
  return (selected[0].find("img").attr("src") == selected[1].find("img").attr("src"));
};