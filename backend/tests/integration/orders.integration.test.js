const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { Order } = require('../../src/database/models');
const { expect } = chai;
const app = require('../../src/api/api');
chai.use(chaiHttp);

describe('Usando o método GET em /orders', function () {
    beforeEach(() => {
        sinon.stub(Order, 'findAll').resolves([{order: 'orders'}]);
    });
    afterEach(() => {
        sinon.restore();
    });
    it('Retorna um array de objetos!', async function () {
        const response = await chai
            .request(app)
            .get('/orders');
            expect(response.status).to.deep.equal(200);
            expect(response.body).to.deep.equal([{order: 'orders'}]);
    });

});