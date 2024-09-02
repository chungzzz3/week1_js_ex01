const game = {
    team1: 'Bayern Muchen',
    team2: 'Borrussia Dortmund',
    x: 'Draw',
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

game.scored.forEach((player, index)=> {
    console.log(`Goal${index + 1}: ${player}`);
});

const odds = Object.values(game.odds) //Object.values, object.entries
const oddsAVG = odds.reduce((sum, odd) => sum+ odd, 0)/odds.length
console.log(`Average: ` + oddsAVG.toFixed(2));

function printOdd() {
    var odds = Object.entries(game.odds)
    odds.forEach((team, index) => {
        if(team[0] == 'x')
            console.log(`Odd of Draw: ${team[index]} `);
        else
            console.log(`Odd of Victory ${team.join(': ')}`);
    });
}
printOdd()

const scorers = {}
game.scored.forEach(scorer => {
    if (scorers[scorer]) {
        scorers[scorer] += 1;
    }
    else

        scorers[scorer] = 1
});
console.log(`Scorers: `, scorers);



//  console.log('------------------------test-------------');
//  console.log(game['scored']);


 
 



