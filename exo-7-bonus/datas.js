var jsonDatas = [
    {
        "type": "car",
        "items": [{
            "name": "Fiat Punto",
            "description": "Je suis une voiture",
            "price": 10000,
            "quantity": 2,
            "contact": {
                "lastName": "bibulle",
                "firstName": "machin",
                "address": "13, rue de la poisse",
            },
        }, {
            "name": "Porsche 911",
            "description": "Je suis une belle voiture",
            "price": 80000,
            "quantity": 0,
            "contact": {
                "lastName": "dumbledor",
                "firstName": "albus",
                "address": "poudlard",
            },
        }, {
            "name": "Peugeot 205",
            "description": "Je suis une autre voiture",
            "price": 2000,
            "quantity": 2,
            "contact": {
                "lastName": "skywalker",
                "firstName": "luc",
                "address": "tatouine",
            },
        }],
    }, {
        "type": "house",
        "items": [{
            "name": "Villa sur la plage",
            "description": "Quelle belle vue",
            "price": 870000,
            "quantity": 1,
            "contact": {
                "lastName": "potter",
                "firstName": "harry",
                "address": "poudlard",
            },
        }, {
            "name": "Maison à la campagne",
            "description": "Vive le calme",
            "price": 170000,
            "quantity": 3,
            "contact": {
                "lastName": "curt",
                "firstName": "james, tibérius",
                "address": "entreprise",
            },
        }],
    }, {
        "type": "game",
        "items": [{
            "name": "Monopoly",
            "description": "",
            "price": 30,
            "quantity": 300,
            "contact": {
                "lastName": "AIO",
                "firstName": "karin",
                "address": "tokyo",
            },
        }],
    }, {
        "type": "videoGame",
        "items": [{
            "name": "Mario Bros",
            "description": "",
            "price": 30,
            "quantity": 200,
            "contact": {
                "lastName": "ceriati",
                "firstName": "kevin",
                "address": "annecy",
            },
        }],
    }, {
        "type": "show",
        "items": [{
            "name": "Place VIP concert Metallica",
            "description": "",
            "price": 800,
            "quantity": 10,
            "contact": {
                "lastName": "jolie",
                "firstName": "angelina",
                "address": "nice",
            },
        }, {
            "name": "Entrée au parc Astérix",
            "description": "",
            "price": 30,
            "quantity": 200,
            "contact": {
                "lastName": "bit",
                "firstName": "brade",
                "address": "nice",
            },
        }],
    },
];


var typeValue = {
    car: "voiture",
    house: "maison",
    game: "jeu",
    videoGame: "jeu video",
    show: "spectacle",
};
