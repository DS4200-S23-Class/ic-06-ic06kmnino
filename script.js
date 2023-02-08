document.addEventListener("DOMContentLoaded", function() {


let button = document.getElementById("button1");
let line = document.getElementById("bottom-line");
button.addEventListener("click", function() {
    console.log("HIHIHIHIHHIH");
    line.style.fill = "red";
});

// add mouseover event listener to the circle on the webpage

let circle = document.querySelector(".circle");

circle.addEventListener("mouseover", function() {
    // change the fill color of the circle to orange
    circle.style.fill = "orange";
});

// add mouseout event listener to the circle on the webpage
circle.addEventListener("mouseout", function() {
    circle.style.fill = "green";
});

});