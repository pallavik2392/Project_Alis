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

console.log('lyear',result.Addleadparameters[0].I)
console.log('lmonth',result.Addleadparameters[0].J)
console.log('lday',result.Addleadparameters[0].K)
console.log('occupation',result.Addleadparameters[0].L)

console.log('communicationlangauge',result.Addleadparameters[0].M)
console.log('conselor',result.Addleadparameters[0].N)

console.log('course',result.Addleadparameters[0].O)
console.log('academylocation',result.Addleadparameters[0].P)

console.log('courselangauge',result.Addleadparameters[0].Q) ,console.log('pincode',result.Addleadparameters[0].R)

console.log('addresstext1',result.Addleadparameters[0].S)

console.log('addresstext2',result.Addleadparameters[0].T)

console.log('Land',result.Addleadparameters[0].U)
console.log('exceedfirstname',result.Addleadparameters[1].A)
console.log('exceedmidlename',result.Addleadparameters[1].B)
console.log('exceedlastname',result.Addleadparameters[1].C)
console.log('Firstnamestaff',result.AddStaff[0].A)
console.log('Middlenamestaff',result.AddStaff[0].B)
console.log('Lastnamestaff',result.AddStaff[0].C)
console.log('Personelphone',result.AddStaff[0].D)
console.log('Workphone',result.AddStaff[0].E)
console.log('Email',result.AddStaff[0].F)
console.log('Role',result.AddStaff[0].G)
console.log('Designation',result.AddStaff[0].H)
console.log('Department',result.AddStaff[0].I)
console.log('TeachingStaff',result.AddStaff[0].J)
console.log('OfficeLocation',result.AddStaff[0].K)
console.log('Coursename',result.AddCourse[0].A)
console.log('Shortcode',result.AddCourse[0].B)
console.log('Courselocation',result.AddCourse[0].C)
console.log('LangaugeofInstruction',result.AddCourse[0].D)
console.log('PracticalRequirement',result.AddCourse[0].E)
console.log('MedicalHistoryRequirement',result.AddCourse[0].F)
console.log('ModesofInstruction',result.AddCourse[0].G)
console.log('Topic',result.AddCourse[0].H)
console.log('TheoryORpractical',result.AddCourse[0].I)
console.log('FeeType',result.AddCourse[0].J)
console.log('Feeamount',result.AddCourse[0].K)
console.log('Scalarshipreedemable',result.AddCourse[0].L)
console.log('UpfrontdiscountType',result.AddCourse[0].M)
console.log('UpfrontdiscountAmount',result.AddCourse[0].N)
console.log('PayablediscountType',result.AddCourse[0].O)
console.log('PayablediscountAmount',result.AddCourse[0].P)
console.log('BajajdiscountType',result.AddCourse[0].Q)
console.log('BajajDiscountamount',result.AddCourse[0].R)
console.log('BajajDownpayment',result.AddCourse[0].S)
console.log('BajajmaxInstallment',result.AddCourse[0].T)
console.log('BajajDocuments',result.AddCourse[0].U)
console.log('HDFCdiscountType',result.AddCourse[0].V)
console.log('HDFCDiscountamount',result.AddCourse[0].W)
console.log('HDFCDownpayment',result.AddCourse[0].X)
console.log('HDFCmaxInstallment',result.AddCourse[0].Y)
console.log('HDFCDocuments',result.AddCourse[0].Z)
console.log('K11discountType',result.AddCourse[0].AA)
console.log('K11Discountamount',result.AddCourse[0].AB)
console.log('K11Installments',result.AddCourse[0].AC)
console.log('K11Downpayment',result.AddCourse[0].AD)
console.log('K11maxInstallment',result.AddCourse[0].AE)
console.log('K11Documents',result.AddCourse[0].AF)
console.log('BatchLocation',result.AddCourse[0].AG)
console.log('PracticalLocation',result.AddCourse[0].AH)
console.log('BatchLangauge',result.AddCourse[0].AI)
console.log('Vertualcapacity',result.AddCourse[0].AJ)
console.log('Physicalcapacity',result.AddCourse[0].AK)
console.log('Startdate',result.AddCourse[0].AL)
console.log('Enddate',result.AddCourse[0].AM)
console.log('Starttime',result.AddCourse[0].AN)
console.log('Endtime',result.AddCourse[0].AO)
console.log('Frequency',result.AddCourse[0].AP)
console.log('Student',result.NewTicket[0].A)
console.log('Course',result.NewTicket[0].B)
console.log('Subject',result.NewTicket[0].C)
console.log('Department',result.NewTicket[0].D)
console.log('Category',result.NewTicket[0].E)
console.log('Subcategory',result.NewTicket[0].F)
console.log('Tags',result.NewTicket[0].G)
console.log('Nextdate',result.NewTicket[0].H)
console.log('Starttime',result.NewTicket[0].I)
console.log('Endtime',result.NewTicket[0].J)
console.log('Status',result.NewTicket[0].K)
console.log('Priority',result.NewTicket[0].L)
console.log('Changenote',result.NewTicket[0].M)
console.log('upadatestaffname',result.AddStaff[2].A)
console.log('updatestafflastname',result.AddStaff[2].B)
console.log('updatestaffworkphone',result.AddStaff[2].C)
console.log('nametoreplace',result.AddStaff[2].D)
console.log('updatefirstname',result.AddStaff[2].E)
console.log('nametoreplacefirstname',result.AddStaff[2].F)
console.log('updatemiddlename',result.AddStaff[2].G)
console.log('nametoreplacemidlename',result.AddStaff[2].H)
console.log('updatepersonalphone',result.AddStaff[2].I)
console.log('numbertoreplacepersonel',result.AddStaff[2].J)
console.log('updateworkphone',result.AddStaff[2].K)
console.log('numbertoreplaceworkphone',result.AddStaff[2].L)
console.log('updateemail',result.AddStaff[2].M)
console.log('emailtoreplace',result.AddStaff[2].N)






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
        lyear:result.Addleadparameters[0].I,
        lmonth:result.Addleadparameters[0].J,
        lday:result.Addleadparameters[0].K,
        occupation:result.Addleadparameters[0].L,
        communicationlangauge:result.Addleadparameters[0].M,
        conselor:result.Addleadparameters[0].N,       
        course:result.Addleadparameters[0].O,
        academylocation:result.Addleadparameters[0].P,
        courselangauge:result.Addleadparameters[0].Q,
        pincode:result.Addleadparameters[0].R,
        addresstext1:result.Addleadparameters[0].S,
        addresstext2:result.Addleadparameters[0].T,
        Land:result.Addleadparameters[0].U,
        exceedfirstname:result.Addleadparameters[1].A,
        exceedmidlename:result.Addleadparameters[1].B,
        exceedlastname:result.Addleadparameters[1].C,
        Firstnamestaff:result.AddStaff[0].A,
        Middlenamestaff:result.AddStaff[0].B,
        Lastnamestaff:result.AddStaff[0].C,
        Personelphone:result.AddStaff[0].D,
        Workphone:result.AddStaff[0].E,
        Email:result.AddStaff[0].F,
        Role:result.AddStaff[0].G,
        Designation:result.AddStaff[0].H,
        Department:result.AddStaff[0].I,
        TeachingStaff:result.AddStaff[0].J,
        OfficeLocation:result.AddStaff[0].K,
        Coursename:result.AddCourse[0].A,
        Shortcode:result.AddCourse[0].B,
        Courselocation:result.AddCourse[0].C,
        LangaugeofInstruction:result.AddCourse[0].D,
        PracticalRequirement:result.AddCourse[0].E,
        MedicalHistoryRequirement:result.AddCourse[0].F,
        ModesofInstruction:result.AddCourse[0].G,
        Topic:result.AddCourse[0].H,
        TheoryORpractical:result.AddCourse[0].I,
        FeeType:result.AddCourse[0].J,
        Feeamount:result.AddCourse[0].K,        
        Scalarshipreedemable:result.AddCourse[0].L,
        UpfrontdiscountType:result.AddCourse[0].M,
        UpfrontdiscountAmount:result.AddCourse[0].N,
        PayablediscountType:result.AddCourse[0].O,
        PayablediscountAmount:result.AddCourse[0].P,
        BajajdiscountType:result.AddCourse[0].Q,
        BajajDiscountamount:result.AddCourse[0].R,
        BajajDownpayment:result.AddCourse[0].S,
        BajajmaxInstallment:result.AddCourse[0].T,
        BajajDocuments:result.AddCourse[0].U,
        HDFCdiscountType:result.AddCourse[0].V,
        HDFCDiscountamount:result.AddCourse[0].W,
        HDFCDownpayment:result.AddCourse[0].X,
        HDFCmaxInstallment:result.AddCourse[0].Y,
        HDFCDocuments:result.AddCourse[0].Z,
        K11discountType:result.AddCourse[0].AA,
        K11Discountamount:result.AddCourse[0].AB,
        K11Installments:result.AddCourse[0].AC,
        K11Downpayment:result.AddCourse[0].AD,
        K11maxInstallment:result.AddCourse[0].AE,
        K11Documents:result.AddCourse[0].AF,
        BatchLocation:result.AddCourse[0].AG,
        PracticalLocation:result.AddCourse[0].AH,
        BatchLangauge:result.AddCourse[0].AI,
        Vertualcapacity:result.AddCourse[0].AJ,
        Physicalcapacity:result.AddCourse[0].AK,
        Startdate:result.AddCourse[0].AL,
        Enddate:result.AddCourse[0].AM,
        Starttime:result.AddCourse[0].AN,
        Endtime:result.AddCourse[0].AO,
        Frequency:result.AddCourse[0].AP,
        Student:result.NewTicket[0].A,
        Course:result.NewTicket[0].B,
        Subject:result.NewTicket[0].C,
        Department:result.NewTicket[0].D,
        Category:result.NewTicket[0].E,
        Subcategory:result.NewTicket[0].F,
        Tags:result.NewTicket[0].G,
        Nextdate:result.NewTicket[0].H,
        Starttime:result.NewTicket[0].I,
        Endtime:result.NewTicket[0].J,
        Status:result.NewTicket[0].K,
        Priority:result.NewTicket[0].L,
        Changenote:result.NewTicket[0].M,
        upadatestaffname:result.AddStaff[2].A,
        updatestafflastname:result.AddStaff[2].B,
        updatestaffworkphone:result.AddStaff[2].C,
        nametoreplace:result.AddStaff[2].D,
        updatefirstname:result.AddStaff[2].E,
        nametoreplacefirstname:result.AddStaff[2].F,
        updatemiddlename:result.AddStaff[2].G,
        nametoreplacemidlename:result.AddStaff[2].H,
        updatepersonalphone:result.AddStaff[2].I,
        numbertoreplacepersonel:result.AddStaff[2].J,
        updateworkphone:result.AddStaff[2].K,
        numbertoreplaceworkphone:result.AddStaff[2].L,
        updateemail:result.AddStaff[2].M,
        emailtoreplace:result.AddStaff[2].N,

       
    };
}

module.exports = new dataRequired();