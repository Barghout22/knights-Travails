const knightCreator = (position, path) => {
  if (position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7)
    return null;

  return { position, path };
};

const knightMoves = (start, end) => {
  let queue = [knightCreator(start, [start])];
  let currentPos = queue.shift();

  while (
    currentPos.position[0] !== end[0] ||
    currentPos.position[1] !== end[1]
  ) {
    let moves = [
      [currentPos.position[0] + 2, currentPos.position[1] - 1],
      [currentPos.position[0] + 2, currentPos.position[1] + 1],
      [currentPos.position[0] - 2, currentPos.position[1] - 1],
      [currentPos.position[0] - 2, currentPos.position[1] + 1],
      [currentPos.position[0] + 1, currentPos.position[1] - 2],
      [currentPos.position[0] + 1, currentPos.position[1] + 2],
      [currentPos.position[0] - 1, currentPos.position[1] - 2],
      [currentPos.position[0] - 1, currentPos.position[1] + 2],
    ];
    moves.forEach((move) => {
      let node = knightCreator(move, currentPos.path.concat([move]));
      if (node) queue.push(node);
    });
    currentPos = queue.shift();
  }
  console.log(`it took ${
    currentPos.path.length - 1
  } moves to get from ${start} to
  ${end}`);
  console.log("the moves");
  for (let i = 0; i < currentPos.path.length; i++) {
    console.log(currentPos.path[i]);
  }
};

knightMoves([1, 1], [2, 2]);
