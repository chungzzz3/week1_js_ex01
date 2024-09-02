const game = {
    team1: 'Bayern Muchen',
    team2: 'Borrussia Dortmund',
    player: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ],
    ],
    score : '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
}

//================
let player1 = game.player[0]
let player2 = game.player[1]

console.log('Player1: ' + player1);
console.log('Player2: '+ player2);



//===============
let gk = player1[0]
console.log(`GK team1:  ` + gk);

let fieldPlayers = player1.slice(1)
console.log(`fieldPlayers: ${fieldPlayers}`);

//==================

let allPlayers = player1.concat(player2)
console.log(`All Player: `+ allPlayers);
let players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic']
console.log(`Players Team 1 Final: `+ players1Final);

const team1 = game.odds.team1
const draw = game.odds.x
const team2 = game.odds.team2

function printGoals(...name) {
    var goal = 0
    console.log(`Name: ` + name);
    const notThisMatch =[];
    name.forEach(element => {
        if(!allPlayers.includes(element))
            notThisMatch.push(element)
    });
    game.scored.forEach(score => {
        if(name.includes(score))
            goal++;
    });
    console.log(`Player not in this match: ${notThisMatch}`);
    console.log(`Total Goals: ${goal}`);
}
printGoals('Reus','Hummels', 'Mark',  'Gnarby', 'Gnarby')

const teamToWin = Object.entries(game.odds).sort((a,b) => a[1] - b[1])
console.log(`Team will win: ` + teamToWin[0][0]);
