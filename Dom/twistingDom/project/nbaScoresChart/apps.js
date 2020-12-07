const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

// #############################

const ulParent = document.createElement("ul");

for (let game of warriorsGames){

    //  distructuring warriorsGames object
    const {homeTeam, awayTeam} = game;

    // creating li
    const gameLi = document.createElement('li');

    // distructuring homeTeam
    const {
        team:hTeam,
        points:hPoints,
    } = homeTeam;

    // distructuring awayTeam      
    const {
        team:aTeam,
        points:aPoints
    } = awayTeam;

    // 
    const teamNames = `${aTeam} @ ${hTeam}`;

    // if aPoint > hPoint bold aPoint else bold hPoint

    // declaration of variable outside function is 
    // important as scope of variable declared inside   
    // function is limited to the function and can't be 
    // used outside the function=> line 132
    // gameLi.innerHTML  = `${teamNames} @ ${scoreLine}m,`;

    // declaring scoreline with let
    // const can't be used as it will
    // raise error missing initializer

    let scoreLine; // declaring empty variable
    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b>-${hPoints}` 
    } else{
        scoreLine = `${aPoints}-<b>${hPoints}</b>`
    }

    // filtering golden team
    // if hTeam is Golden State then 
    // warrior object should be homeTeam object
    // else warrior object should be awayTeam
    const warriors = hTeam ==='Golden State' ? homeTeam : awayTeam;
    console.log(warriors)

    // warriors.isWinner is either true or false
    // add win class to gameLi when warriors.isWinner = true
    // else add class loss
    gameLi.classList.add(warriors.isWinner  ? 'win' : 'loss')

    // creating the inner text
    gameLi.innerHTML  = `${teamNames} @ ${scoreLine}m,`;

    ulParent.appendChild(gameLi)
}


// append prepend the create htmlText to body tag
document.body.prepend(ulParent);