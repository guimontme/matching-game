import './style.css'
import CardGame from '../CardGame';



export default function CardFrontBack() {
  globalThis.cardFrontBack = {}
  globalThis.cardFrontBack.hamdleClick = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back');

    $cardFrontBack.classList.toggle('open');
  }


  return (
    /*html*/
    `
    <article class="card-front-back" 
      onClick="globalThis.cardFrontBack.hamdleClick(event)"
      >
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame('logo-javascript', 'Logo do JavaScript')}
      </div>
    </article>
    `);
};
