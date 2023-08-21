

import { Chess } from 'chess.js';
import fs from 'fs';

const exportMovesFromPGN = (pgn) => {
  const chess = new Chess(); // Create a new instance of Chess.js
  const moves = [];

  chess.loadPgn(pgn); // Load the PGN into Chess.js

  // Iterate through each move and add it to the moves array
  const history = chess.history({ verbose: true });
  for (let i = 0; i < history.length; i++) {
    const arithmeticMove = history[i].from + history[i].to;
    moves.push(arithmeticMove);

  }

  return moves; // Return the array of moves
};

const filePath = 'chess_games.pgn';
fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading the file:', error);
    return;
  }

  // Split the data by blank lines (each game is separated by a blank line)
  const games = data.split(/\n\s*\n\s*\n/);

  const allGamesMoves = [];

  // Iterate through each game and process it
  games.forEach((pgn, index) => {
    const moves = exportMovesFromPGN(pgn);
    console.log(`Game ${index + 1}: `, moves);

    allGamesMoves.push({ game: index + 1, moves });
  });

  const outputFilePath = 'output_moves.json';
  const outputContent = JSON.stringify(allGamesMoves, null, 2);

  // Write the moves of all games to the output file
  fs.writeFile(outputFilePath, outputContent, (error) => {
    if (error) {
      console.error('Error saving the file:', error);
      return;
    }

    console.log('Output moves saved to:', outputFilePath);
  });
});