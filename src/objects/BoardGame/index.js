import './style.css'
import CardFrontBack from '../../components/CardFrontBack';

export default function BoardGame(amountCards) {

    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent= $htmlCardFrontBack.repeat(amountCards);

    return /*html*/`
        <main class="board-game">
        ${$htmlContent}
        </main>
    `;
};
