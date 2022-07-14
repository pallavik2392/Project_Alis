var expect = require('chai').expect;
var should =require('chai').should();

var tVar = {
    name:"abc",
    age: 22
};
function myobj(){

}

describe("Assertion with should",function(){
    it("assertion to try should", async()=>{
       false.should.be.a('boolean');
       tVar.should.be.an('object');
       myobj.should.be.a('function');
       (new myobj).should.be.a('object');
       tVar.should.have.a.property('name');
    
    })
})