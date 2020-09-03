document.body.style.backgroundImage = "url('stage.png')";

function createDuck(){
    var duck = document.createElement("DIV");
    duck.style.width = "250px";
    duck.style.height = "250px";
    duck.style.position = "relative"
    duck.style.top = "200px";
    duck.style.left = "830px";
    duck.style.backgroundImage = "url('duck.gif')";
    document.body.appendChild(duck);
}
createDuck();

var direction = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']; 

var random = Math.floor(Math.random() * direction.length);
console.log(random, direction[random]);

var interval = setInterval(timer, 1500);

// function timer() {
//     var random = Math.floor(Math.random() * direction.length);
// console.log(random, direction[random]);
// }



