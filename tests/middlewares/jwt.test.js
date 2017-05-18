/**
/**
 * Created by gnu_d on 16.5.17.
 */

var sinon = require('sinon');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

describe("Routes", function() {
    // describe("Try JWT token on /api", function() {
    //     var token = "";
    //     it("login ok", function (done) {
    //         chai.request("localhost:3000")
    //             .post('/authenticate')
    //             .send({
    //                 "password": "password"
    //             })
    //             .end(function(err, res){
    //                 token = res.body.token
    //                 expect(res.status).to.equal(200);
    //                 expect(token).to.isNotNull
    //                 done();
    //             });
    //     })
    //
    //     it("access /api with valid token", function (done) {
    //         chai.request("localhost:3000")
    //             .get('/')
    //             .send({
    //                 "token": token
    //             })
    //             .end(function(err, res){
    //                 expect(res.status).to.equal(200);
    //                 expect(res.decoded).to.equal(false);
    //                 done();
    //             });
    //     })

    // });
});