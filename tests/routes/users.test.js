var sinon = require('sinon');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

var getUsers = require('../../routes/users/getUsers');

describe("Routes", function() {
    describe("GET Users", function() {
        it("should return", function (done) {
            chai.request("localhost:3000")
                .get('/users')
                .end(function(err, res){
                    expect(res.status).to.equal(200);
                    expect(res.text).to.equal('respond with a resource');
                    done();
                });
        })

    });
});