$(document).ready(function() {
  var animal = prompt("Type one of the following animals to learn more about them: snake, turtle, bugs");
  if (animal === "snake") {
    $('#snake').show();
  } else if (animal === "bugs") {
    $('#bugs').show();
  } else {
    $('#turtles').show();
  }

});



// if (age > 21) {
//   $('#drinks').show();
// } else if (age === 21) {
//   alert("Now don't go crazy!");
//   $('#drinks').show();
// } else {
//   $('#under-21').show();
// }
