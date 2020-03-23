//Importing Packages
let chai = require('chai');
let chaiHttp = require('chai-http');

//Configure Asserting Api
chai.use(chaiHttp);
//Definning URL to Test
const url='https://restcountries.eu';

//Definning MOCHA Test
describe('Test de Paises', () => {

    describe('State', () => {

        it('OK State', (done) => {
            chai.request(url)
                .get('/rest/v2/name/spain')
                .send()
                .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    done();
                });
        });

        it('NOK State', (done) => {
            chai.request(url)
                .get('/rest/v2/name/jadash')
                .send()
                .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(404);
                    done();
                });
        });

    });

    describe('Content', () => {

        it('Result name (ENG)', (done) => {
            chai.request(url)
                .get('/rest/v2/name/spain')
                .send()
                .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    chai.expect(resp.text).to.include('"name":"Spain"');
                    done();
                });
        });

        it('Result name (ESP)', (done) => {
            chai.request(url)
                .get('/rest/v2/name/espana')
                .send()
                .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    chai.expect(resp.text).to.include('"name":"Spain"');
                    done();
                });
        });

        it('Result name (Sub-String)', (done) => {
            chai.request(url)
                .get('/rest/v2/name/span')
                .send()
                .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    chai.expect(resp.text).to.include('"name":"Spain"');
                    done();
                });
        });

        it('Result name (Case Sensitive)', (done) => {
            chai.request(url)
                .get('/rest/v2/name/SPAIN')
                .send()
                .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    chai.expect(resp.text).to.include('"name":"Spain"');
                    done();
                });
        });

        it('Result name (Special Symbols)', (done) => {
            chai.request(url)
                .get('/rest/v2/name/españa')
                .send()
                .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(400);
                    done();
                });
        });
    
        it('Result name (Data type)', (done) => {
            chai.request(url)
                .get('/rest/v2/name/spain')
                .send()
                .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    chai.expect(typeof resp.body[0]['name']).to.equal('string');
                    chai.expect(typeof resp.body[0]['area']).to.equal('number');
                    done();
                });
        });
        
    });

});