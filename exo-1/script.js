// you can write js here
console.log('hello from file');

var kelvin = prompt('Quelle est la température en Kelvin aujourd\'hui ?');

var celsius = kelvin - 273;

/*
*  CALCUL DE LA TEMPERATURE EN FAHRENHEIT
*  afin de recuperer la temperature en fahrenheit
*  on utilise le resultat de la temperature de "celsius" que l'on multiplie par (9/5)
*  a laquelle on ajoute 32
*
*  on integre la methode Math.floor afin de ressortir un entier
*/
var fahrenheit = Math.floor(celsius * (9/5) + 32);


window.alert('temperature en kelvin = ' + kelvin + ' ; en celsius = ' + celsius + ' ; en fahrenheit = ' + fahrenheit);
console.log('temperature en kelvin = ' + kelvin + ' ; en celsius = ' + celsius + ' ; en fahrenheit = ' + fahrenheit);