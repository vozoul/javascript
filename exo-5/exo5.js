// you can write js here

console.log('exo-5');

var input = prompt('Mot ou Texte a traduire en baleine ...');
var voyels = ['a','e','i','o','u','y'];
var resArray = [];

function chante(){
    var inputArray = input.split('');
    // for(var i = 0; i < input.length; i++){
    //     for(var v = 0; v < voyels.length; v++){
    //         if(inputArray[i] == voyels[v]){
    //             resArray.push(inputArray[i]);
    //         }
    //     }
    // }

    inputArray.forEach(function(letter){
        if(voyels.indexOf(letter) != -1){
            resArray.push(letter);
        }
    });
    window.alert(resArray.join('').toUpperCase());
    // réponse 5.8 : on affiche le resultat d'un tableau pour palier a ceci on utilise la fonction .join();
}

chante();
