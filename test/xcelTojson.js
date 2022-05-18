'use strict';

var fs=require('fs-extra');
//const  path = require("path");

const excelToJson = require('convert-excel-to-json');
//const { browser } = require('protractor');

const result = excelToJson({

    source: fs.readFileSync('credential.xls'),
    header: {
        // Is the number of rows that will be skepped and wiil not be present at our result object
        rows:1
    }

});


//browser.ignoreSynchronization=true;
console.log('xcel output::',result)

console.log('url',result.logincred[0].B)

console.log('usercred',result.logincred[1].B)

console.log('passcred',result.logincred[2].B)

console.log('firstnameLead',result.Addleadparameters[0].A)

console.log('middlenameLead',result.Addleadparameters[0].B)

console.log('lastnameLead',result.Addleadparameters[0].C)

console.log('emailLead',result.Addleadparameters[0].D)

console.log('phnumber1',result.Addleadparameters[0].E)

console.log('phnumber2',result.Addleadparameters[0].F)

console.log('mobNumber',result.Addleadparameters[0].G)

console.log('genderName',result.Addleadparameters[0].H)

console.log('occupation',result.Addleadparameters[0].I)

console.log('pincode',result.Addleadparameters[0].J)

console.log('addresstext1',result.Addleadparameters[0].K)

console.log('addresstext2',result.Addleadparameters[0].L)

console.log('Land',result.Addleadparameters[0].M)




var dataRequired = function(){
    //browser.ignoreSynchronization=true;

    
    this.testConfig={

        
        url:result.logincred[0].B,
        usercred:result.logincred[1].B,
        passcred:result.logincred[2].B,
        firstnameLead:result.Addleadparameters[0].A,
        middlenameLead:result.Addleadparameters[0].B,
        lastnameLead:result.Addleadparameters[0].C,
        emailLead:result.Addleadparameters[0].D,
        phnumber1:result.Addleadparameters[0].E,
        phnumber2:result.Addleadparameters[0].F,
        mobNumber:result.Addleadparameters[0].G,
        genderName:result.Addleadparameters[0].H,
        occupation:result.Addleadparameters[0].I,
        pincode:result.Addleadparameters[0].J,
        addresstext1:result.Addleadparameters[0].K,
        addresstext2:result.Addleadparameters[0].L,
        Land:result.Addleadparameters[0].M,



    };
}

module.exports = new dataRequired();