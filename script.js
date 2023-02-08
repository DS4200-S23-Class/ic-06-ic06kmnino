let button = document.getElementById("button");
let line = document.getElementById("line");
button.addEventListener("click", function() {
    line.style.color = "red";
  });

// add mouseover event listener to the circle on the webpage

let circle = document.getElementById("circle");

circle.addEventListener("mouseover", function() {
    circle.style.backgroundColor = "orange";
});

// add mouseout event listener to the circle on the webpage
circle.addEventListener("mouseout", function() {
    circle.style.backbgroundColor = "blue";
});