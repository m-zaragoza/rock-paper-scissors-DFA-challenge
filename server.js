import express from 'express';
import dotenv from 'dotenv';

import { router as index } from './routes/index.js';
import { router as play } from './routes/play.js';
import { router as result } from './routes/result.js';
import { router as finalResult } from './routes/finalResult.js';
import { router as notFound } from './routes/notFound.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
app.set(`view engine`, `ejs`);
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;
const host = process.env.HOST;

app.use('/', index);
app.use('/play', play);
app.use('/result', result);
app.use('/finalResult', finalResult);
app.use('/*', notFound);

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`RPS app listening at http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;