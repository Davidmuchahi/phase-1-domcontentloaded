// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
    let p = document.getElementById("text");
    p.innerHTML = "This is really cool!";
    console.log(p);
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");