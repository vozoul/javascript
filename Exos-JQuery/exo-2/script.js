console.log('exercice 2');
/*
principaux selecteurs:
Tag
id
class
 */

$(document).ready(function(){
    console.log(
        $("#title"),
        $(".sidenav"),
        $("footer"),
        $(".input-group"),
        $(".glyphicon"),
        $(".label-success"),
        $(".article"),
        $(".glyphicon-time"),
        $(".sidenav li:first-of-type"),
        $(".sidenav:odd"),
    );
});