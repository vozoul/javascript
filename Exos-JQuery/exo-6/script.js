console.log("exercice 6");

$(document).ready(function(){

    $('.alert').hide();

    $('#connection').on('click', function(){
        var $valeur = ['verifiez le(s) champ(s) '];
        var $error = 0;
        $('input').each(function (){
            if($(this).val() === ''){
                $valeur.push($(this).attr('name'));
                $error++;
            }
        });

        //regexs
        var $mailValide = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test($('#email').val())) ? '' : $error++ + $valeur.push('email invalide');
        var $passValide = (/^.{6,}$/.test($('#password').val())) ? '' : $error++ + $valeur.push('mot de passe trop court');

        var sortie = ($error === 0 ) ?
            $('.alert').hide() + $('.alert.alert-success').toggle().fadeIn().text('vous êtes connecter') :
            $('.alert').hide() + $('.alert.alert-danger').toggle().fadeIn().text($valeur)
        ;
    });
});