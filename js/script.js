$(document).ready(function(){
  var tiles = $(".tile");
  var num_clicks = 0;
  $("#board").on("click", ".tile", foo);
});


function foo() {
  $(this).addClass("active")
}