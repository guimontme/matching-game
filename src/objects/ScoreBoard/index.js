import './style.css'
import PlayerName from "../../components/PlayerName";

export default function ScoreBoard(...playerNames) {

    const $players = playerNames.map((player) => {
        return PlayerName(player);
    });
    return /*html*/`
        <header class='score-board'>
            ${$players[0]}
            ${$players[1]}
        </header>
    `;
};
