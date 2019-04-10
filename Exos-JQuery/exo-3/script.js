console.log("exercice 3");


$(document).ready(function(){

    $('h1').text("Vincent");
    $('#tagline').text("Proactif et dynamique");

    $('#myNavbar ul:first-child').hide();

    $('#loginLink span').removeClass('glyphicon-log-in').addClass('glyphicon-user');

    $('footer p').text("Copyright 2020").css("font-weight", "bold");

    var count = 1;
    var imgCount = 1;
    $("#work1 p").each(function(){
        $(this).text('My project ' + count);
        count++;
    });

    $(".img-responsive").each(function(){
        $(this).attr('src', 'img/' + imgCount + '.jpg').addClass('equal');
        imgCount++;
    });

    var $p = $("<p>");
    $p.text('Last Project');
    var $img = $("<img>");
    $img.attr('src', 'img/1.jpg').addClass('equal');
    var $contain = $("<div>");

    $contain.append($p, $img);

    $("#work1").prepend($contain);

    $("footer").addClass("intro");
});
