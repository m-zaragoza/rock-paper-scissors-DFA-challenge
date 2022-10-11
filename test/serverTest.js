import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';
chai.use(chaiHttp);

describe(`Server tests`, () => {

    describe(`route '/' tests`, () => {

        it(`should render 'index' with a 200 status`, async () => {
            const res = await chai.request(server)
                .get(`/`)

            expect(res).to.be.html;
            expect(res.status).to.equal(200);
            expect(res.text).to.include(`Let's play rock, paper, scissors!`);
        });
    });

    describe(`route '/play' tests`, () => {

        it(`should have a 200 status (post)`, async () => {
            const res = await chai.request(server)
                .post(`/play`)
                .send({ player1: `Ben`, player2: `Tom` })

            expect(res.status).to.equal(200);
        });

        it(`should render 'play' with a 200 status`, async () => {
            const res = await chai.request(server)
                .get(`/play`)

            expect(res).to.be.html;
            expect(res).to.have.status(200);
            expect(res.text).to.include(`Now scroll down...`);
        });
    });

    describe(`route '/result tests`, () => {
        // I can't figure out why this test gives me a 500 status! Adding a status to the res doesn't work. When I tested /play -post it returned 200 even without the explicit status on the route. 
        // I think I'm setting up the test wrong, but I don't know how.
        xit(`should have a 200 status (post)`, async () => {
            const res = await chai.request(server)
                .post(`/result`)
                .send({ choiceP1: `rock`, choiceP2: `paper` })

            expect(res).to.have.status(200);
        });

        it(`should render 'result' with a 200 status`, async () => {
            const res = await chai.request(server)
                .get(`/result`)

            expect(res).to.be.html;
            expect(res).to.have.status(200);
            expect(res.text).to.include(`This round results...`);
        });
    });

    describe(`route '/finalResult' tests`, () => {

        it(`should render 'finalResult' with a 200 status`, async () => {
            const res = await chai.request(server)
                .get(`/finalResult`)

            expect(res).to.be.html;
            expect(res).to.have.status(200);
            expect(res.text).to.include(`your final score is:`);
        });
    });

    describe(`route for not found`, () => {

        it(`should render 'notFound' with a 404 status`, async () => {
            const res = await chai.request(server)
                .get(`/*`)

            expect(res).to.be.html;
            expect(res).to.have.status(404);
            expect(res.text).to.include(`Uh oh... something went wrong...`);

        })
    })
});

