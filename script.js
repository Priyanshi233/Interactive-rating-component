var rating;
var val;

document.getElementById("1").addEventListener("click", function () {
  assignVal(1);
});
document.getElementById("2").addEventListener("click", function () {
  assignVal(2);
});
document.getElementById("3").addEventListener("click", function () {
  assignVal(3);
});
document.getElementById("4").addEventListener("click", function () {
  assignVal(4);
});
document.getElementById("5").addEventListener("click", function () {
  assignVal(5);
});

function assignVal(val) {
  rating = val;
  document.getElementById("result").innerHTML =
    "You selected " + val + " out of 5";
}

document.getElementById("submit").addEventListener("click", thankScreen);

function thankScreen() {
  document.getElementById("first-container").style.display = "none";
  document.getElementById("second-container").style.display = "block";
}
