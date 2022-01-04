export const getWinner = (user: string, CPU: string): string => {
  let winner: string = '';

  if (user === CPU) {
    winner = 'tie';
  } else if (user === 'rock' && CPU === 'scissors') {
    winner = 'user';
  } else if (user === 'scissors' && CPU === 'paper') {
    winner = 'user';
  } else if (user === 'paper' && CPU === 'rock') {
    winner = 'user';
  } else {
    winner = 'CPU';
  }

  return winner;
};
