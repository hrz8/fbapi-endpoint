const supertest = require('supertest');
const app = require('../server');

describe("Testing the Facebook Feed API", () => {

    beforeEach(() => {
        jest.setTimeout(20000);
    });

    it("tests our testing framework if it works", () => {
        expect(2).toBe(2);
    });

    it("tests the get feed endpoint", async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
    });

    it("tests the get feed endpoint with limit (1 to 10)", async () => {
        for (let i = 1; i <= 10; i++) {
            const response = await supertest(app).get(`/?limit=${i}`);
            expect(response.status).toBe(200);
            expect(response.body.data.length).toBe(i);
        }
    });

    it("tests the get feed endpoint with limit (9) and page (1 to 10)", async () => {
        for (let i = 1; i <= 10; i++) {
            const response = await supertest(app).get(`/?limit=9&page=${i}`);
            expect(response.status).toBe(200);
            expect(response.body.data.length).toBe(9);
        }
    });

});
