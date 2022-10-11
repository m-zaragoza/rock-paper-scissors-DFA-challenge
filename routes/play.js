import express from 'express';
import Game from '../src/game.js';

export const router = express.Router();

router.post(`/`, (req, res) => {
    const game = new Game(req.body.player1, req.body.player2);
    req.app.locals.game = game;

    res.redirect(`/play`);
})

router.get(`/`, (req, res) => {
    res.status(200);
    const player1 = req.app.locals.game.player1;
    const player2 = req.app.locals.game.player2;

    res.render(`play`, {
        p1name: player1.getName(),
        p2name: player2.getName()
    });
});