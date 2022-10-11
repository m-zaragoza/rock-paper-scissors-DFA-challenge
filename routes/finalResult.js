import express from 'express';

export const router = express.Router();

router.get(`/`, (req, res) => {
    res.status(200);
    const game = req.app.locals.game;
    game.finalWinner();

    res.render(`finalResult`, {
        finalResult: game.getFinalResult(),
        nameP1: game.player1.getName(),
        nameP2: game.player2.getName(),
        scoreP1: game.player1.getScore(),
        scoreP2: game.player2.getScore()
    });
});