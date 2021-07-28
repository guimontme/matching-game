import './style.css'



export default function CardGame(icon = 'alura-pixel', alt = 'Logo da Alura') {
  const state = (icon == 'alura-pixel') ? 'front' : 'back';
  return /*html*/ `
    <article class="card-game ${state}">
        <img src="./src/assets/images/${icon}.png" alt="${alt}" />
    </article>
    `
}
