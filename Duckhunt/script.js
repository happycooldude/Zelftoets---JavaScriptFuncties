var points = 0;
var misses = 0;

document.body.style.backgroundImage = "url('stage.png')";
document.body.onclick = function miss(){
    misses + 1;
    console.log(misses);
}

function createDuck(){
    var duck = document.createElement("DIV");
    duck.id = 'duck';
    duck.style.width = "250px";
    duck.style.height = "250px";
    duck.style.position = "relative"
    duck.style.top = 200;
    duck.style.left = 830;
    duck.style.backgroundImage = "url('duck.gif')";
    document.body.appendChild(duck);
}

// document.getElementById("duck").onclick = function hit(){
//     points +1;
//     console.log(points);
// }

var direction = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']; 

var interval = setInterval(timer, 1000);

createDuck();

function timer() {
    
    var top = 200;
    var left = 830;
        var random = Math.floor(Math.random() * direction.length);
        console.log(random, direction[random]);
        console.log(top,left);
    switch(direction){
        case 'N':
            top + 10;
            duck.style.marginTop = top + "px";
        break
        case 'NE':
            top + 10;
            left + 10;
            duck.style.marginTop = top + "px";
            duck.style.marginLeft = left + "px";
        break
        case 'E':
            left + 10;
            duck.style.marginLeft = left + "px";
        break
        case 'SE':
            top - 10;
            left + 10;
            duck.style.marginTop = top + "px";
            duck.style.marginLeft = left + "px";
        break
        case 'S':
            top - 10;
            duck.style.marginTop = top + "px";
        break
        case 'SW':
            top - 10;
            left - 10;
            duck.style.marginTop = top + "px";
            duck.style.marginLeft = left + "px";
        break
        case 'W':
            left - 10;
            duck.style.marginLeft = left + "px";
        break
        case 'NW':
            top + 10;
            left - 10;
            duck.style.marginTop = top + "px";
            duck.style.marginLeft = left + "px";
        break
    }
}
timer();



