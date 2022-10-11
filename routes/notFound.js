import express from 'express';

export const router = express.Router();

router.route(`*`).all((req, res) => {
    res.status(404);
    res.render('notFound');
});