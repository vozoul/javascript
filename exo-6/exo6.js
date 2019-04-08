// Partie 8 code academy
console.log("exo-6");

/*
// OLD SET EXERCISE
    // ======================================================
    // commenter cette ligne de code.
    var joeInfo = {
        name: "Joe's house",
        rooms: 5,
        garage: false,
        bathrooms: 1 + 2,
        cars: ['Clio', 'Van'],
    };

    console.log(joeInfo);

    // afficher le nombre de voitures de Joe

    console.log('Cars : ' + joeInfo.cars.length);

    // changer le nombre de salle de bains de Joe : il n'en possède au'une.

    joeInfo.bathrooms += 3;
    console.log('Bathrooms : ' + joeInfo.bathrooms);

    // Joe vient d'acquérir un garage changer la structure pour le refléter.

    joeInfo.garage = true;

    console.log(joeInfo);
//END OLD SET
*/

var team = {
    _players: [
        {
            firstName: "Pablo",
            lastName: "Sanchez",
            age: 11,
        },
    ],
    _games: [
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27,
        },
    ],
};

function addPlayer(firstName, lastName, age) {
    team._players.push({
        firstName: firstName,
        lastName: lastName,
        age: age,
    },);
}

function addGame(opponent, teamPoints, opponentsPoints) {
    team._games.push({
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentsPoints,
    },);
}

addPlayer('jean', 'tube', 42);
addPlayer('marc', 'kogal', 15);
addPlayer('benoit', 'pourtouppe', 23);
addPlayer('oliver', 'iluahoni', 17);

addGame('senechal', 31, 18);
addGame('holly-spip', 47, 63);
addGame('gwendal', 24, 23);
addGame('aragorn', 52, 27);

function sumDot(average) {
    if (average === true) {
        var dotTeam = team._games.reduce(function (accu, add) {
            return (accu + add.opponentPoints);
        }, 0);
        return dotTeam / team._games.length;
    } else {
        var dotTeam = team._games.reduce(function (accu, add) {
            return accu + add.teamPoints;
        }, 0);
        return dotTeam;
    }
}

function teamSorted(byAge) {
    if (byAge === true) {
        var sortedPlayers = team._players.sort(function (a, b) {
            return a.age - b.age;
        });
        return sortedPlayers[sortedPlayers.length - 1];
    } else if (byAge === false) {
        var sortedPlayers = team._players.sort(function (a, b) {
            return (a.firstName).localeCompare(b.firstName);
        });
        return sortedPlayers;
    } else {
        var sortedPlayers = team._players.sort(function (a, b) {
            return (a.lastName).localeCompare(b.lastName);
        });
        return sortedPlayers;
    }
}

console.log('team total point : ' + sumDot());
console.log('Average score by game : ' + sumDot(true));
console.log('le joueur le plus vieux est : ' + teamSorted(true).firstName);
console.log(teamSorted());