var sinon = require('sinon');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

describe("Routes", function() {
    describe("Ask for JWT token", function() {
        it("login ok", function (done) {
            chai.request("localhost:3000")
                .post('/authenticate')
                .send({
                    "password": "password"
                })
                .end(function(err, res){
                    expect(res.status).to.equal(200);
                    expect(res.body.success).to.equal(true);
                    done();
                });
        })

        it("login bad", function (done) {
            chai.request("localhost:3000")
                .post('/authenticate')
                .send({
                    "password": "yourpassword"
                })
                .end(function(err, res){
                    expect(res.status).to.equal(200);
                    expect(res.body.success).to.equal(false);
                    done();
                });
        })

    });
});