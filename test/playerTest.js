import { expect } from 'chai';
import Player from '../src/player.js';

describe(`Player class tests`, () => {

    let testPlayer;

    describe(`Player instances`, () => {

        beforeEach(() => {
            testPlayer = new Player(`Player1`);
        });

        it(`should be created with a name provided as argument`, () => {

            expect(testPlayer.getName()).to.equal(`Player1`);
        });

        it(`should be created with an initial score of 0`, () => {

            expect(testPlayer.getScore()).to.equal(0);
        });

        it(`should be created with a 'null' choice`, () => {

            expect(testPlayer.getChoice()).to.be.a('null');
        });
    });

    describe(`Player methods`, () => {

        beforeEach(() => {
            testPlayer = new Player(`Player1`);
        });

        describe(`addScore method`, () => {

            it(`should add one to score`, () => {

                testPlayer.addScore();

                expect(testPlayer.getScore()).to.equal(1);
            });
        });

        describe(`playerChoice method`, () => {

            it(`should assign the value passed as argument to choice`, () => {

                testPlayer.playerChoice(`paper`);

                expect(testPlayer.getChoice()).to.equal(`paper`);
            });
        });
    });
});