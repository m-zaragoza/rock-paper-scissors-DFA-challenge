import express from 'express';

export const router = express.Router();

router.post(`/`, (req, res) => {
    const choiceP1 = req.body.choiceP1;
    const choiceP2 = req.body.choiceP2;
    const game = req.app.locals.game;

    game.player1.playerChoice(choiceP1);
    game.player2.playerChoice(choiceP2);
    game.round();

    res.redirect(`/result`);
})

router.get(`/`, (req, res) => {
    res.status(200);
    const result = req.app.locals.game.getResult();

    res.render(`result`, {
        result: result
    });
});