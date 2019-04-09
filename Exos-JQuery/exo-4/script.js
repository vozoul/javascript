console.log("exercice 4");

$(document).ready(function(){
    $('form button.btn.btn-danger').on('click', function(){
        var $mail = $('footer form input:first-of-type').val();
        var $mailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})$/;
        if($mail === ''){
            window.alert('Veuillez renseigner votre mail');
        }else if(!$mailReg.test($mail)){
            window.alert("l'adresse : " + $mail + ", n'est pas valide. vérifiez le contenu");
        }else{
            console.log($mail);
            window.alert('Merci nous vous tiendrons informé des différentes offres sur l\'adresse ' + $mail);
        }
    });

    $("li a:contains('Products')").on('dblclick', function(){
        $(this).hide();
    });

    var $count = 1;
    var $icone = $('a:contains("Cart") span')[0];

    $('img').on('click', function(){
        var $nbrProd = parseInt($(this).closest('.panel').children('.panel-footer').text().replace(/[^\d]/g, ""));
        var $valCart = parseInt($('a:contains("Cart")').text().replace(/[^\d]/g, ""));
        var $totCart = ($valCart > 0) ?  $nbrProd + $valCart : $nbrProd;
        $('a:contains("Cart")').text(' Cart ' + $totCart);
        $('a:contains("Cart")').prepend($icone);
    });

    // $('a, img, h1, input, button').on('mouseover', function(event){
    $('.panel').on('mouseover', function(){
        console.log('l\'utilisateur regarde : ' + $(this).children('.panel-footer').text());
    })

    $('form input').on('keydown', function(){
        console.log($('form input').val());
    })


});

