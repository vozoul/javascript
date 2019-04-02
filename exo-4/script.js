// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

function rmLast(){
    secretMessage.pop();
}

function toProgram(){
    secretMessage.push('to');
    secretMessage.push('programme');
}

function modify(input, output){
    secretMessage.forEach(function(item, index, array){
       if(item === input){ return secretMessage[index] = output;}
    });
}

function delFirst(){
    secretMessage.shift();
}

function addProg(value){
    secretMessage.unshift(value);
}

function uKnow(){
    secretMessage.forEach(function(item, index){
        if(item === 'get' || item === 'right' || item === 'the' || item === 'first' || item === 'time'){
            if(item === 'get'){
                secretMessage[index] = 'know';
            }else{
                secretMessage.splice(index, 1);
            }
        }
    });

/*
    var pos = secretMessage.indexOf('get');
    secretMessage.splice(pos, 5, 'know');
*/
}

function launch(){
    rmLast();
    toProgram();
    modify('easily', 'right');
    delFirst();
    addProg('Programming');
    uKnow();
    window.alert(secretMessage.join(' '));
}

launch();