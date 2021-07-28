import './assets/styles/style.css'
import ScoreBoard from './objects/ScoreBoard' 
import BoardGame from './objects/BoardGame' 

// const title = 'Matching Game'

const $root = document.querySelector('#root')

$root.insertAdjacentHTML(
  "beforeend", 
  `
  ${ScoreBoard('Player 1', 'Player 2')}
  ${BoardGame(6)}

`);
