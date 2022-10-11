import Player from "./player.js";

class Game {
    player1;
    player2;
    #result;
    #finalResult;

    #options = {
        rock: { winsTo: [`scissors`, `lizard`], losesTo: [`paper`, `spock`] },
        paper: { winsTo: [`rock`, `spock`], losesTo: [`scissors`, `lizard`] },
        scissors: { winsTo: [`paper`, `lizard`], losesTo: [`rock`, `spock`] },
        lizard: { winsTo: [`spock`, `paper`], losesTo: [`rock`, `scissors`] },
        spock: { winsTo: [`rock`, `scissors`], losesTo: [`lizard`, `paper`] }
    };

    constructor(player1, player2) {
        this.player1 = new Player(player1);
        this.player2 = new Player(player2);
    };

    round = () => {
        const choiceP1 = this.player1.getChoice();
        const choiceP2 = this.player2.getChoice();
        const comparator = this.#options[choiceP1];

        if (comparator.winsTo.includes(choiceP2)) {
            this.#result = `${this.player1.getName()} wins!`;
            this.player1.addScore();
        }
        else if (comparator.losesTo.includes(choiceP2)) {
            this.#result = `${this.player2.getName()} wins!`;
            this.player2.addScore();
        }
        else { this.#result = `It's a draw!` }
    };

    getResult = () => this.#result;

    finalWinner = () => {
        const name1 = this.player1.getName();
        const name2 = this.player2.getName();
        const score1 = this.player1.getScore();
        const score2 = this.player2.getScore();

        this.#finalResult = score1 === score2 ? `You tied!` : score1 > score2 ? `${name1} is the winner! Woohoo!` : `Go ${name2}! You won!`;
    };

    getFinalResult = () => this.#finalResult;
};

export default Game;
