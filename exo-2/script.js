// you can write js here
console.log('exo-2');


var isInscrit = () => {
    var inscrit = prompt('Etes vous inscrit ?( o/n )');
    if(inscrit === 'o'){
        return true;
    }else if (inscrit === 'n'){
        return false;
    }else{
        return console.log()
    }
};
var age = prompt('Indiquez votre age');
var raceNumber = Math.floor(Math.random()*1000);


if(age > 18 && isInscrit === true){
    console.log('You will race at 9:30 am');
}else if (age || isInscrit === true){
    console.log('You\'ll race at 11:00 am your number is = ' + raceNumber);
}else if (age < 18 || isInscrit === false){
    console.log('You\'ll race at 12:30 pm with number ' + raceNumber);
}else{
    console.log('Go to see the registration desk');
}

