document.body.style.backgroundImage = "url('stage.png')";

function createDuck(){
    var duck = document.createElement("DIV");
    duck.style.width = "250px";
    duck.style.height = "250px";
    duck.style.position = "relative"
    duck.style.top = "200";
    duck.style.left = "830";
    duck.style.backgroundImage = "url('duck.gif')";
    document.body.appendChild(duck);
}
createDuck();

var direction = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']; 

var interval = setInterval(timer, 1500);

function timer() {
        var random = Math.floor(Math.random() * direction.length);
        console.log(random, direction[random]);
        console.log(top,left);
    switch(direction){
        case "N":
            duck.style.top + 10;
            duck.style.top = top + "px";
        break
        case "NE":
            duck.style.top + 10;
            duck.style.left + 10;
            duck.style.top = top + "px";
            duck.style.left = left + "px";
        break
        case "E":
            duck.style.left + 10;
            duck.style.left = left + "px";
        break
        case "SE":
            duck.style.top - 10;
            duck.style.left + 10;
            duck.style.top = top + "px";
            duck.style.left = left + "px";
        break
        case "S":
            duck.style.top - 10;
            duck.style.left = top + "px";
        break
        case "SW":
            duck.style.top - 10;
            duck.style.left - 10;
            duck.style.top = top + "px";
            duck.style.left = left + "px";
        break
        case "W":
            duck.style.left - 10;
            duck.style.left = left + "px";
        break
        case "NW":
            duck.style.top + 10;
            duck.style.left - 10;
            duck.style.top = top + "px";
            duck.style.left = left + "px";
        break
    }
}
timer();



