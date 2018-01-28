function getRandColor(){
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(){
  var color = getRandColor();
  $(".wholePg").css("background-color", color);
  $(".qt").css("color", color);
}
