console.log("exo-7");

console.log(jsonDatas);

function trad(source) {
    source.forEach(function (item) {
        item.type = translate(item.type);
    });
}

function translate(key) {
    var keys = Object.keys(typeValue);
    if (keys.indexOf(key) != -1) {
        return typeValue[key];
    }
}

function trouve() {
    var resultat = [];
    console.clear();
    var checked = document.getElementById('checked').checked;
    var recherche = document.getElementById('search').value;
    jsonDatas.forEach(function (keys) {
        if (keys.type === recherche || keys.type === translate(recherche)) {
            //document.getElementById('liste').innerHTML += "<h3>" + recherche + "</h3>";
            keys.items.forEach(function(item){
                if (!checked && item.quantity > 0) {
                    resultat.push(item);
                    document.getElementById('liste').innerHTML += "<li>" + item.name + "</li>";

                } else if (checked && item.quantity >= 0) {
                    resultat.push(item);
                    document.getElementById('liste').innerHTML += "<li>" + item.name + "</li>";
                }
            });
        }
    });
    console.log("resultat " + resultat);
    filtering(resultat);
}


function filtering(resultat) {
    document.getElementById('liste').innerHTML = "";
    var select = document.getElementById('filter').value;
    console.log(select);
    if (select === '1') {
        resultat.sort(function (a, b) {
            return (a.name).localeCompare(b.name);
        });
    } else if (select === '2') {
        resultat.sort(function (a, b) {
            return (b.name).localeCompare(a.name);
        });
    } else if (select === '3') {
        resultat.sort(function (a, b) {
            return (a.price) - (b.price);
        });
    } else if (select === '4') {
        resultat.sort(function (a, b) {
            return (b.price) - (a.price);
        });
    }
    resultat.forEach(function (item) {
        document.getElementById('liste').innerHTML += "<li>" + item.name + "</li>";
    })
    console.log(resultat);
}

function addProduct() {
    jsonDatas.push({
            name: document.getElementById('newName').value,
            type: document.getElementById('newType').value,
            description: document.getElementById('newDesc').value,
            price: document.getElementById('newPrice').value,
            quantity: document.getElementById('newQty').value,
        },
    );
    console.log(jsonDatas);
}

function showContact(){
    jsonDatas.forEach(function(item) {
        document.getElementById('liste').innerHTML += "<h3>" + item.type + "</h3>";
        console.log(item.type);
        item.items.forEach(function(index){
            document.getElementById('liste').innerHTML += "<li>" + index.contact.lastName + ", " + index.contact.firstName + ", " + index.contact.address + "</li>";
            console.log(index.contact);
        });
    });
}

trad(jsonDatas);