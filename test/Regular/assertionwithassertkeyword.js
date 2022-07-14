var assert = require('chai').assert;

var tVar = {
    name:"abc",
    age: 22
};
function myobj(){
return{
    value : 100,
    axis : 20
}
}

describe("Assertion with assert",function(){
    it("assertion to try assert", async()=>{
       assert(10!=20,"10 not != 20");
       assert.equal(tVar.name,"abc");
       let t1=new myobj();
       let t2=new myobj();
       assert.deepEqual(t1,t2);
       
    
    })
})