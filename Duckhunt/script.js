var points = 1;
var misses = 0;

//maak de achtergrond aan en zorg dat de strafpunten bij elkaar opgeteld worden (de achtergrond werkt|het klikken en de optelling werkt nog niet)
document.body.style.backgroundImage = "url('stage.png')";
document.body.onclick = function miss(){
    misses + 1;
    console.log(misses);
}

//maak de duck aan en zet hem in het midden van het scherm (half werkend)
function createDuck(){
    var duck = document.createElement("DIV");
    duck.id = 'duck';
    duck.style.width = "250px";
    duck.style.height = "250px";
    duck.style.position = "relative"
    var top = duck.style.top = 200;
    var left = duck.style.left = 830;
    duck.style.backgroundImage = "url('duck.gif')";
    document.body.appendChild(duck);
}

//Hier moeten er punten worden opgeteld als je op de DIV van de duck klikt (nog niet werkend)
// document.getElementById("duck").onclick = function hit(){
//     points +1;
//     console.log(points);
// }

//de array met de verschillende richtingen en de timer die in de timer functie gebruikt wordt (werkend)
var direction = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']; 

var interval = setInterval(timer, 1000);

createDuck();

//laat om de 1,5 seconden een random richting kiezen uit de array boven. en zorgt dat de duck kan bewegen (random richting kiezen werkt | de duck laten bewegen werkt nog niet)
function timer() {
        var random = Math.floor(Math.random() * direction.length);
        console.log(random, direction[random]);
        // console.log(top,left); geeft errors omdat ze niet "defined" zijn
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



