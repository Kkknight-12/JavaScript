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

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement("ul");

  for (let game of games) {
      const gameLi = document.createElement('li');
      gameLi.innerHTML  = getScoreLine(game);
      gameLi.classList.add(isWinner(game, targetTeam)  ? 'win' : 'loss')
      ulParent.appendChild(gameLi)
  }
  // returning ul after adding li
  return ulParent;

};

const isWinner = ({homeTeam, awayTeam}, targetTeam) => { 
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  console.log(target.team)
  return target.isWinner;
}

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;

  let scoreLine; // declaring empty variable
      if (aPoints > hPoints) {
          scoreLine = `<b>${aPoints}</b>-${hPoints}` 
      } 
      else{
          scoreLine = `${aPoints}-<b>${hPoints}</b>`
      }
    return `${teamNames} ${scoreLine}`
};

// when houston wins
const gsSection = document.querySelector('#gs');
const gsChart = makeChart(warriorsGames, 'Golden');
gsSection.appendChild(gsChart);

// when golden wins
const houstonSection = document.querySelector('#hr')
const hrChart = makeChart(warriorsGames, 'Houston');
houstonSection.appendChild(hrChart);