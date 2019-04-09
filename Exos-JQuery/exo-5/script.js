console.log("exercice 5");

$(document).ready(function(){

    $('img').on('click', function(){
        uChoice = $(this).attr('alt');
        console.log(uChoice);
        cChoice = getCptChoice();
        Winner(uChoice, cChoice);
    });

    function getCptChoice(){
        var num = Math.floor(Math.random()*3);
        if(num === 0){
            return 'rock';
        }else if (num === 1){
            return 'paper'
        }else if (num === 2){
            return 'scissors';
        }
    };

    function Winner(uChoice, cChoice){
        if(uChoice === cChoice){
            $('.resultat span').text('Tied');
            $('.resultat span').removeClass('red').removeClass('green');
        }else if (uChoice !== cChoice){
            if ((uChoice === 'rock' && cChoice === 'scissors') ||
                (uChoice === 'paper' && cChoice === 'rock') ||
                (uChoice === 'scissors' && cChoice === 'paper')
            ){
                    $('.resultat span').text('computer played : ' + cChoice + ', You win !');
                    $('.resultat span').removeClass('red').addClass('green');
            }else{
                $('.resultat span').text('computer win with : ' + cChoice);
                $('.resultat span').removeClass('green').addClass('red');
            }
        }
    };
});