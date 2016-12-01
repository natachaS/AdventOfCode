const fs = require('fs');
let x = 0, y = 0, direction = 0;

fs.readFile('./input.txt', 'utf8', function(err, data) {
  let moves = data.split(', ');
  moves.forEach( function(turn) {
    direction = (direction + (turn[0] === 'R' ? 1 : -1) + 4) % 4;
    let steps = parseInt(turn.slice(1));
    switch(direction) {
      case 0:
        y += steps;
        break;
      case 1:
        x += steps;
        break;
      case 2:
        y -= steps;
        break;
      case 3:
        x -= steps;
        break;
    }
  });
  console.log('Number of blocks =', (Math.abs(x) + Math.abs(y)));
  return;
});
