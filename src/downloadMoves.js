import fetch from 'node-fetch';
import fs from 'fs';

async function downloadChessGames(username) {
  const gamesUrl = `https://lichess.org/api/games/user/${username}?max=245`; // Replace '10' with the desired number of games

  try {
    const response = await fetch(gamesUrl);
    const pgnData = await response.text();

    // Split the PGN data into separate games
    const games = pgnData.split('\n\n');

    return games;
  } catch (error) {
    console.error('Error downloading chess games:', error);
    return [];
  }
}

// Usage example
const username = 'Aborigen100500';
downloadChessGames(username)
  .then((games) => {
    console.log('Downloaded games:', games);

    // Save games to a file
    const filename = 'chess_games.pgn';
    const fileContent = games.join('\n\n');

    fs.writeFile(filename, fileContent, (error) => {
      if (error) {
        console.error('Error saving the file:', error);
      } else {
        console.log('File saved successfully:', filename);
      }
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });