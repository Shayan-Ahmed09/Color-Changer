let body = document.querySelector("body");
let button = document.querySelector("button");
let color = ['red','orange','yellow','blue',"white","lightgreen","darkgreen","skyblue","lightblue","lightbrown","brown"];

body.style.background = "violet";

button.addEventListener("click",function(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
});

