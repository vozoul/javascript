console.log("exo-7");

console.log(jsonDatas);

var typeValue = {
    car: "voiture",
    house: "maison",
    game: "jeu",
    videoGame: "jeu video",
    show: "spectacle",
}

console.log();

function trad(source){
    source.forEach(function(item){
       var key = item.type;
       var keys = Object.keys(typeValue);
       if(keys.indexOf(key) != -1){
           item.type = typeValue[key];
       }
    });
}

trad(jsonDatas);