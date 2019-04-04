console.log("exo-7");

console.log(jsonDatas);

function trad(source){
    source.forEach(function(item){
        item.type=translate(item.type);
    });
}

function translate(key){
    var keys = Object.keys(typeValue);
    if(keys.indexOf(key) != -1){
        return typeValue[key];
    }
}

function trouve(){
    var resultat = [];
    console.clear();
    document.getElementById('liste').innerHTML = '';
    var checked = document.getElementById('checked').checked;
    var recherche = document.getElementById('search').value;
    jsonDatas.forEach(function(item){
        if(item.type === recherche || item.type === translate(recherche)) {
            if (!checked && item.quantity > 0) {
                console.log(item);
                resultat.push(item);
                document.getElementById('liste').innerHTML += "<li>" + item.name + "</li>";

            } else if (checked) {
                console.log(item);
                resultat.push(item);
                document.getElementById('liste').innerHTML += "<li>" + item.name + "</li>";
            }
        }
    });
    console.log("resultat " + resultat);
    filtering(resultat);
}



function filtering(resultat){
    document.getElementById('liste').innerHTML = "";
    var select = document.getElementById('filter').value;
    console.log(select);
    if(select === '1'){
        resultat.sort(function(a,b){
           return (a.name).localeCompare(b.name);
        });
    }else if (select === '2'){
        resultat.sort(function(a,b){
            return (b.name).localeCompare(a.name);
        });
    }else if(select === '3') {
        resultat.sort(function(a,b){
            return (a.price)-(b.price);
        });
    }else if(select === '4') {
        resultat.sort(function(a,b){
            return (b.price)-(a.price);
        });
    }
    resultat.forEach(function(item){
        document.getElementById('liste').innerHTML += "<li>" + item.name + "</li>";
    })
    console.log(resultat);
}

trad(jsonDatas);