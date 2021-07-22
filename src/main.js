import './assets/styles/style.css'
import CardGame from './components/CardGame'

// const title = 'Matching Game'

const $root = document.querySelector('#root')
const $htmlCardGame = CardGame();

console.log($htmlCardGame);

$root.insertAdjacentHTML("beforeend", $htmlCardGame);