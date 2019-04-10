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

function ucFirst(str){
    if(str.length > 0){
        return str[0].toUpperCase() + str.substring(1);
    }else{
        return str;
    }
}

function trouve() {
    console.clear();
    var resultat = [];
    var checked = document.getElementById('checked').checked;
    var recherche = document.getElementById('search').value;
    jsonDatas.forEach(function (keys) {
        if (keys.type === recherche || keys.type === translate(recherche)) {
            //document.getElementById('liste').innerHTML += "<h3>" + recherche + "</h3>";
            keys.items.forEach(function(item){
                if (!checked && item.quantity > 0) {
                    resultat.push(item);
                    //document.getElementById('liste').innerHTML += "<li>" + item.name + "</li>";

                } else if (checked && item.quantity >= 0) {
                    resultat.push(item);
                    //document.getElementById('liste').innerHTML += "<li>" + item.name + "</li>";
                }
            });
        }
    });
    //console.log("resultat " + resultat);
    filtering(resultat, recherche);
}


function filtering(resultat, recherche) {
    document.getElementsByTagName('tbody').innerHTML = "";
    var select = document.getElementById('filter').value;
    //console.log(select);
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
    var search = recherche;
    showResult(resultat, search);
}

function showResult(resultat, search){
    var tableBody = document.getElementsByTagName("tbody");
    var line = tableBody[0];
    line.innerHTML = "";

    resultat.forEach(function(item){
        var tdType = document.createElement("td");
        var txtType = document.createTextNode(search);
        tdType.appendChild(txtType);
        var tr = document.createElement('tr');

        for(var key in item){
            if(key != 'contact'){
                var name = document.createElement('td');
                var text = document.createTextNode(item[key]);
                name.appendChild(text);
                tr.appendChild(name);
            }
        }
        tr.appendChild(tdType);
        for(var info in item.contact){
            var name = document.createElement('td');
            var text = document.createTextNode(item.contact[info]);
            name.appendChild(text);
            tr.appendChild(name);
        }

        line.appendChild(tr);
    });
    //
    // resultat.forEach(function(item){
    //     $(".tbody").append("<tr class='item'>" +
    //
    //     for(var key in item){
    //         if(key != "contact"){
    //             $(".item").append("<td>" + item[key] + "</td>");
    //         }
    //     }
    //     $(".item").append("<td>" + search + "</td>");
    //     for(var info in item.contact){
    //         $(".item").append("<td>" + item.contact[info] + "</td>");
    //     }
    // });
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