import { expect } from 'chai';
import spies from 'chai-spies';
import chai from 'chai';
import Game from '../src/game.js';
chai.use(spies);

describe(`Game class tests`, () => {

    let testGame, output, scoreSpy;

    describe(`Game instance`, () => {

        beforeEach(() => {
            testGame = new Game(`Ben`, `Tom`);
        });

        it(`should create a player object with the right name (player1)`, () => {

            expect(testGame.player1.getName()).to.equal(`Ben`);
        });

        it(`should create a player object with the right name (player2)`, () => {

            expect(testGame.player2.getName()).to.equal(`Tom`);
        });
    });

    describe(`round() method- result`, () => {

        beforeEach(() => {
            testGame = new Game(`Ben`, `Tom`);
        });

        it(`should return the expected string when player 2 wins`, () => {
            testGame.player1.playerChoice(`rock`);
            testGame.player2.playerChoice(`paper`);
            testGame.round();
            output = testGame.getResult();

            expect(output).to.equal(`Tom wins!`)
        });

        it(`should return the expected string when player 1 wins`, () => {
            testGame.player1.playerChoice(`scissors`);
            testGame.player2.playerChoice(`paper`);
            testGame.round();
            output = testGame.getResult();

            expect(output).to.equal(`Ben wins!`)
        });

        it(`should return the expected string when it's a draw`, () => {
            testGame.player1.playerChoice(`rock`);
            testGame.player2.playerChoice(`rock`);
            testGame.round();
            output = testGame.getResult();

            expect(output).to.equal(`It's a draw!`)
        });
    });

    describe(`round() method- addScore()`, () => {

        beforeEach(() => {
            testGame = new Game(`Ben`, `Tom`);
        });

        it(`should add a point to the player's score when they win (player1)`, () => {
            testGame.player1.playerChoice(`scissors`);
            testGame.player2.playerChoice(`paper`);
            testGame.round();

            output = testGame.player1.getScore();

            expect(output).to.equal(1);
        });

        it(`should add a point to the player's score when they win (player2)`, () => {
            testGame.player1.playerChoice(`rock`);
            testGame.player2.playerChoice(`paper`);
            testGame.round();

            output = testGame.player2.getScore();

            expect(output).to.equal(1);
        });

        it(`should not add any points to the player's score when they lose (player1)`, () => {
            testGame.player1.playerChoice(`rock`);
            testGame.player2.playerChoice(`paper`);
            testGame.round();

            output = testGame.player1.getScore();

            expect(output).to.equal(0);
        });

        it(`should not add any points to the player's score when they lose (player2)`, () => {
            testGame.player1.playerChoice(`scissors`);
            testGame.player2.playerChoice(`paper`);
            testGame.round();

            output = testGame.player2.getScore();

            expect(output).to.equal(0);
        });

        it(`Should call addScore() once on player1 when they win`, () => {
            scoreSpy = chai.spy.on(testGame.player1, 'addScore', () => { });
            testGame.player1.playerChoice(`paper`);
            testGame.player2.playerChoice(`rock`);
            testGame.round();

            expect(scoreSpy).to.have.been.called.once;
        });

        it(`Should call addScore() once on player2 when they win`, () => {
            scoreSpy = chai.spy.on(testGame.player2, 'addScore', () => { });
            testGame.player1.playerChoice(`scissors`);
            testGame.player2.playerChoice(`rock`);
            testGame.round();

            expect(scoreSpy).to.have.been.called.once;
        });
    });

    describe(`finalWinner() method tests`, () => {
        beforeEach(() => {
            testGame = new Game(`Ben`, `Tom`);
        });

        it(`should return the right message when both players have the same score`, () => {
            testGame.player1.addScore();
            testGame.player2.addScore();
            testGame.finalWinner();

            expect(testGame.getFinalResult()).to.equal(`You tied!`);
        });

        it(`should return the right message when player1 wins`, () => {
            testGame.player1.addScore();
            testGame.finalWinner();

            expect(testGame.getFinalResult()).to.equal(`Ben is the winner! Woohoo!`);
        });

        it(`should return the right message when player2 wins`, () => {
            testGame.player2.addScore();
            testGame.finalWinner();

            expect(testGame.getFinalResult()).to.equal(`Go Tom! You won!`);
        });

        it(`should have called getScore() on player1 once`, () => {
            scoreSpy = chai.spy.on(testGame.player1, 'getScore', () => { });
            testGame.finalWinner();

            expect(scoreSpy).to.have.been.called.once;
        });

        it(`should have called getScore() on player2 once`, () => {
            scoreSpy = chai.spy.on(testGame.player2, 'getScore', () => { });
            testGame.finalWinner();

            expect(scoreSpy).to.have.been.called.once;
        });
    });
});
