const fs = require('fs');
let x = 0, y = 0, direction = 0;

// PART 1
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

// PART 2 - can definitely be refactoredand optimized
let path = ['0,0'];
let finished = false;

fs.readFile('./input.txt', 'utf8', function(err, data) {
  let moves = data.split(', ');
  moves.forEach( function(turn) {
    if (finished === true) return;
    direction = (direction + (turn[0] === 'R' ? 1 : -1) + 4) % 4;
    let steps = parseInt(turn.slice(1));
    switch(direction) {
      case 0:
        for (i=0; i < steps; i++) {
          y+=1
          let pos = x + ',' + y;
          // console.log(pos)
          if (path.includes(pos)) {
            console.log('Number of blocks to location visited twice =', (Math.abs(x) + Math.abs(y)));
            finished = true;
          }
          path.push(pos)
        }
        break;
      case 1:
        for (i=0; i < steps; i++) {
          x+=1
          let pos = x + ',' + y;
          if (path.includes(pos)) {
            console.log('Number of blocks to location visited twice =', (Math.abs(x) + Math.abs(y)));
            finished = true;
          }
          path.push(pos)
        }
        break;
      case 2:
        for (i=0; i < steps; i++) {
          y-= 1
          let pos = x + ',' + y;
          if (path.includes(pos)) {
            console.log('Number of blocks to location visited twice =', (Math.abs(x) + Math.abs(y)));
            finished = true;
          }
          path.push(pos)
        }
        break;
      case 3:
        for (i=0; i < steps; i++) {
          x-= 1
          let pos = x + ',' + y;
          if (path.includes(pos)) {
            console.log('Number of blocks to location visited twice =', (Math.abs(x) + Math.abs(y)));
            finished = true;
          }
          path.push(pos)
        }
        break;
    }
  });
  return;
});
