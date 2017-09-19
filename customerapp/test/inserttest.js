let express = require('express');
let request = require('supertest');
let expect = require('chai').expect;
let should = require('chai').should()
let sinon = require('sinon');
let Customer = require('../models/customer');
let app = require('../app');
let supertest = require("supertest");
let modelStub = sinon.stub(Customer, 'find')
let modelStubSave = sinon.stub(Customer.prototype, 'save')
let updateStub = sinon.stub(Customer, 'update');

let removeStub = sinon.stub(Customer, 'remove');
let url = supertest("http://localhost:3000");

describe('GET', function() {
    it('route should be getting', (done) => {
        modelStub.yields(null, [{ firstname: "dean", lastname: "winchester", email: "dean@gmail.com" }])
        request(app)
            .get("/customer")
            //.expect('Content-Type',/json/)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body[0].firstname).to.be.equal("dean");
                expect(res.body[0].lastname).to.be.equal("winchester");
                expect(res.body[0].email).to.be.equal("dean@gmail.com");
                done();
            });
    });
});

 describe('testing insert feature', function() {
        before(() => {
            modelStubSave.yields(null, { firstname: "dean", lastname: "winchester", email: "dean@gmail.com" })
        })
        it('it should add customer', function(done) {
        request(app)
            .post('/customer')
            .expect(200)
            //.expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err);
                    expect(res.body.firstname).to.be.equal("dean");
                    expect(res.body.lastname).to.be.equal("winchester");
                    expect(res.body.email).to.be.equal("dean@gmail.com");
                  done();
                });
             
          
            
            });
    });

 describe('Update', () => {

    before(() => {

        updateStub.withArgs({ _id: "jonsnow" }, { $set: { email: "targeryn" } })

            .yields(null, {

                "ok": 1,

                "nModified": 1,

                "n": 1

            });

    })

    it('respond with json', (done) => {
        console.log('inside put Test');
        request(app)
            .put('/customer/jonsnow')
            .send({ email: "targeryn" })
            .end((err, res) => {
                if (err) return done(err);
                else {

                    //console.log(res.body);

                    expect(res.body.ok).to.be.equal(1);

                    
                  done();
                }
               
            });
            

    });

});

// describe('Remove', () => {

//     before(() => {

//         removeStub.withArgs({ '_id': "tanejavibhor" })

//             .yields(null, {

//                 "ok": 1,

//                 "nModified": 1,

//                 "n": 1

//             });

//     })

//     it('respond with json', (done) => {

//         console.log('inside delete Test');

//         request(App)

//             .delete('/api/delete/tanejavibhor')

//             .end((err, res) => {

//                 if (err) return done(err);

//                 else {

//                     //console.log(res.body);

//                     expect(res.body.ok).to.be.equal(1);

//                     done();

//                 }

//             });

//     });

// });

