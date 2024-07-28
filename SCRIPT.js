"use strict";
var typed = new Typed("#element", {
  strings: [
    "Web Developer",
    "JS Developer",
    "HTML Developer ",
    "CSS Developer",
  ],
  typeSpeed: 50,
});
//clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}
//display values
function display(value) {
  document.getElementById("result").value += value;
}
//result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
