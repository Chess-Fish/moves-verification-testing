import { Chess } from 'chess.js';

const exportMovesFromPGN = (pgn) => {
  var chess = new Chess(); // Create a new instance of Chess.js
  const moves = [];
  
  chess.loadPgn(pgn); // Load the PGN into Chess.js
  
  // Iterate through each move and add it to the moves array
  var history = chess.history({ verbose: true });
  for (var i = 0; i < history.length; i++) {

    const arithmeticMove = history[i].from + history[i].to;
    moves.push(arithmeticMove);
  }
  
  return moves; // Return the array of moves
}

var pgn = `1. d4 f5 2. b3 f4 3. e4 fxe3` 

var moves = exportMovesFromPGN(pgn);
console.log(moves);