class Player {
    #name;
    #score;
    #choice;

    constructor(name) {
        this.#name = name;
        this.#score = 0;
        this.#choice = null;
    };

    getName = () => this.#name;
    getScore = () => this.#score;
    getChoice = () => this.#choice;

    addScore = () => this.#score++;
    playerChoice = aChoice => this.#choice = aChoice;
};

export default Player;