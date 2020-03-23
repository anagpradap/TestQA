//Importing Packages
let chai = require('chai');
let chaiHttp = require('chai-http');
let sinon = require('sinon');

//Configure Asserting Api
chai.use(chaiHttp);
//Definning URL to Test
const url='https://restcountries.eu';

describe('Mock API Tests', () => {
    /*
    before(()=>{
        sinon.stub(chai,'request')
             .call((cbf) => { cbf(null,JSON.stringify({
                Dato_cliente: {
                    Nombre: 'Ana',
                    Apellido: 'Prada',
                    Direccion: 'Huechuraba',
                    Email: 'griselda.prada@gmail.com',
                    Telefono: 956765567,
                    RUT: 245677890
                },
                Dato_perfil: {
                    Cuenta_ppal: 123456789,
                    Tipo_cliente: 'VIP',
                    Tarjeta_debito: 9878998789
                },
                Dato_Sucursal: {
                    Sucursal_nro: 77,
                    Ejecutivo: 'DANIEL',
                    Telefono_ejec: 987656789,
                    Direccion_suc: 'Las Condes'
                },
                Dato_productos: {
                    Tiene_prod: true,
                    Tipo_producto: [
                        676767,
                        787878,
                        565656,
                        000000,
                        ],
                    Puntos: 789789,
                    Tarjeta_credito: 123456789
                },
                Datos_seguros: {
                    Tiene_prod: false,
                    SOAP: 'falabella',
                    Seguro_vehiculo: 'bci',
                    Seguro_fraude: 'bci',
                    Seguro_hogar: 'bci',
                    Seguro_vida: 'bci'
                },
                Datos_fondos: {
                    Fondo_mutual: 'mutual',
                    Ahorro_previsional: 565656,
                    ctaRentaDiaria: 'prueba'
                },
                Datos_penalizaciones: {
                    InteresesMora_Sobregiro: 000000,
                    InteresMora_TarjetaCredito: 00000,
                    InteresMora_Consumo: 0000000,
                    InteresMora_Hipotecario: 000000
                }
            }))});
    });
    */
    it('Structure', (done) => {
        chai.request(url)
            .get('/rest/v2/name/spain')
            .send()        
            .end((err,resp) =>{
                chai.expect(resp.status).to.equal(200);
                chai.expect(() => {
                    JSON.parse(resp.text); 
                }).to.not.throw();
                done();
            });
    });

    it('Status OK', (done) => {
        chai.request(url)
            .get('/rest/v2/name/spain')
            .send()        
            .end((err,resp) =>{
                chai.expect(resp.status).to.equal(200);
                done();
            });
    });

    describe('Type of data', () => {
        it('Dato Cliente', (done) => {
            chai.request(url)
                 .get('/rest/v2/name/spain')
                 .send()        
                 .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    chai.expect(typeof resp.body['Dato_cliente']['Nombre']).to.equal('string');
                    chai.expect(typeof resp.body['Dato_cliente']['Apellido']).to.equal('string');
                    chai.expect(typeof resp.body['Dato_cliente']['Direccion']).to.equal('string');
                    chai.expect(typeof resp.body['Dato_cliente']['email']).to.equal('string');
                    chai.expect(typeof resp.body['Dato_cliente']['Telefono']).to.equal('number');
                    chai.expect(typeof resp.body['Dato_cliente']['RUT']).to.equal('number');
                    done();
                });
        });  
        
        it('Dato Perfil', (done) => {
            chai.request(url)
                 .get('/rest/v2/name/spain')
                 .send()        
                 .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    chai.expect(typeof resp.body['Dato_perfil']['Cuenta_ppal']).to.equal('number');
                    chai.expect(typeof resp.body['Dato_perfil']['Tipo_cliente']).to.equal('string');
                    chai.expect(typeof resp.body['Dato_perfil']['Tarjeta_debito']).to.equal('number');
                    done();
                });
        });

        it('Dato Sucursal', (done) => {
            chai.request(url)
                 .get('/rest/v2/name/spain')
                 .send()        
                 .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    chai.expect(typeof resp.body['Dato_Sucursal']['Sucursal_nro']).to.equal('number');
                    chai.expect(typeof resp.body['Dato_Sucursal']['Ejecutivo']).to.equal('string');
                    chai.expect(typeof resp.body['Dato_Sucursal']['Telefono_ejec']).to.equal('number');
                    chai.expect(typeof resp.body['Dato_Sucursal']['Direccion_suc']).to.equal('string');
                    done();
                });
        });

        it('Dato Productos', (done) => {
            chai.request(url)
                 .get('/rest/v2/name/spain')
                 .send()        
                 .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    chai.expect(typeof resp.body['Dato_productos']['Tiene_prod']).to.equal('boolean');
                    chai.expect(typeof resp.body['Dato_productos']['Tipo_producto']).to.equal('Array(4)');
                    chai.expect(typeof resp.body['Dato_productos']['Puntos']).to.equal('number');
                    chai.expect(typeof resp.body['Dato_productos']['Tarjeta_credito']).to.equal('number');
                    done();
                });
        });

        it('Dato Seguros', (done) => {
            chai.request(url)
                 .get('/rest/v2/name/spain')
                 .send()        
                 .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    chai.expect(typeof resp.body['Datos_seguros']['Tiene_prod']).to.equal('boolean');
                    chai.expect(typeof resp.body['Datos_seguros']['SOAP']).to.equal('string');
                    chai.expect(typeof resp.body['Datos_seguros']['Seguro_vehiculo']).to.equal('string');
                    chai.expect(typeof resp.body['Datos_seguros']['Seguro_fraude']).to.equal('string');
                    chai.expect(typeof resp.body['Datos_seguros']['Seguro_hogar']).to.equal('string');
                    chai.expect(typeof resp.body['Datos_seguros']['Seguro_vida']).to.equal('string');
                    done();
                });
        });

        it('Datos Fondos', (done) => {
            chai.request(url)
                 .get('/rest/v2/name/spain')
                 .send()        
                 .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    chai.expect(typeof resp.body['Datos_fondos']['Fondo_mutual']).to.equal('string');
                    chai.expect(typeof resp.body['Datos_fondos']['Ahorro_previsional']).to.equal('number');
                    chai.expect(typeof resp.body['Datos_fondos']['ctaRentaDiaria']).to.equal('string');
                    done();
                });
        });

        it('Datos Penalizaciones', (done) => {
            chai.request(url)
                 .get('/rest/v2/name/spain')
                 .send()        
                 .end((err,resp) =>{
                    chai.expect(resp.status).to.equal(200);
                    chai.expect(typeof resp.body['Datos_penalizaciones']['InteresesMora_Sobregiro']).to.equal('number');
                    chai.expect(typeof resp.body['Datos_penalizaciones']['InteresMora_TarjetaCredito']).to.equal('number');
                    chai.expect(typeof resp.body['Datos_penalizaciones']['InteresMora_Consumo']).to.equal('number');
                    chai.expect(typeof resp.body['Datos_penalizaciones']['InteresMora_Hipotecario']).to.equal('number');
                    done();
                });
        });
    });

    it('Format', (done) => {
        chai.request(url)
            .get('/rest/v2/name/spain')
            .send()        
            .end((err,resp) =>{
                chai.expect(resp.status).to.equal(200);
                chai.expect(resp).to.be.json;
                done();
            });
    });

});

