import fs from 'fs';
import { Chess } from 'chess.js';

const generateMoves = () => {
  const game = new Chess();
  const moves = [];

  while (!game.isGameOver() && moves.length < 100) {
    const possibleMoves = game.moves({ verbose: true });
    const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

    const move = game.move({
      from: randomMove.from,
      to: randomMove.to,
      promotion: 'q' // always promote to queen
    });

    if (move) {
      const algebraicMove = move.from + move.to;
      moves.push(algebraicMove);
    }
  }

  return moves;
};

const generateGames = () => {
  const games = [];

  for (let i = 0; i < 10; i++) {
    const moves = generateMoves();
    games.push({
      game: i + 1,
      moves: moves
    });
  }

  return games;
};

const games = generateGames();

const jsonData = JSON.stringify(games, null, 2);
fs.writeFileSync('output_moves.json', jsonData);

console.log('Games saved to games.json');
