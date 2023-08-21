## Moves generator for EVM_chess testing

This repository was created in order to run tests on the EVM Chess Move Verification contract.

This repository downloads chess games from Lichess and converts them to algebraic notation which then can be used to test games in the MoveVerification contract.

to run: 

```
node src/downloadMoves.js
```

```
node src/generateMovesImport.js
 ```


https://www.chess.com/article/view/fastest-chess-checkmates#fool