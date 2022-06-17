const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("addcourse",function(){
    it("course",async() =>{
    await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.usercred);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);
        await Coursepage.clickOncourses();
        await browser.pause(5000);
        await Coursepage.clickOnNewcourse();
        await browser.pause(5000);

    
        await Coursepage.enterCoursename(signinData.Coursename);
        await browser.pause(5000);
        await Coursepage.enterShortCode(signinData.Shortcode);
        await browser.pause(5000);
        await Coursepage.clickOnoverviewsave()
        await browser.pause(5000);

   
    
        await Coursepage.enterCourseLocation(signinData.Courselocation);
        await browser.pause(3000);
        await Coursepage.enterlangaugeofInstruction(signinData.LangaugeofInstruction);
        await browser.pause(3000);
        await Coursepage.enterPracticalRequirement(signinData.PracticalRequirement);
        await browser.pause(3000);
        await Coursepage.enterMedicalRequirement(signinData.MedicalHistoryRequirement);
        await browser.pause(3000);
        await Coursepage.enterModesOfInstruction(signinData.ModesofInstruction);
        await browser.pause(3000);
        await Coursepage.clickOnBasicsave();
        await browser.pause(3000);
        await Coursepage.addTopic(signinData.Topic,signinData.TheoryORpractical);
        await browser.pause(5000);
        await Coursepage.addFee(signinData.FeeType,signinData.Feeamount);
        await browser.pause(5000);
        await Coursepage.clickOnsaveFee();
        await browser.pause(5000);

        await Coursepage.addScholorship(signinData.Scalarshipreedemable);
        await browser.pause(5000);
        await Coursepage.selectUpfrontmode(signinData.UpfrontdiscountType,signinData.UpfrontdiscountAmount);
        await browser.pause(7000);
       
        await Coursepage.selectBajajfinancemode(signinData.BajajdiscountType,signinData.BajajDiscountamount,signinData.BajajDownpayment,signinData.BajajmaxInstallment,signinData.BajajDocuments);
        await browser.pause(7000);
        
        await Coursepage.selectHdfcfinancemode(signinData.HDFCdiscountType,signinData.HDFCDiscountamount,signinData.HDFCDownpayment,signinData.HDFCmaxInstallment,signinData.HDFCDocuments);
        await browser.pause(7000);
       
        await Coursepage.selectK11mode(signinData.K11discountType,signinData.K11Discountamount,signinData.K11Downpayment,signinData.K11maxInstallment,signinData.K11Documents);
        await browser.pause(5000);
        
        await Coursepage.selectPayablewhenablemode(signinData.PayablediscountType,signinData.PayablediscountAmount);
        await browser.pause(7000);
        //await Coursepage.disablePayablewhenable();
        //await browser.pause(3000);
       // await Coursepage.disableBajajfinance();
        //await browser.pause(3000);
        //await Coursepage.disableHDFC();
        //await browser.pause(3000);
       // await Coursepage.disableK11EMI();
        //await browser.pause(3000);
        await Coursepage.clickOnsavepayment();
        await browser.pause(3000);
        await Coursepage.clickOnAddBatch();
        await browser.pause(3000);
        await Coursepage.selectBatchlocation(signinData.BatchLocation);
        await browser.pause(3000);
        await Coursepage.selectPracticalLocation(signinData.PracticalLocation);
        await browser.pause(3000);
        await Coursepage.selectBatchlangauge(signinData.BatchLangauge);
        await browser.pause(3000);
        await Coursepage.addVertualcapacity(signinData.Vertualcapacity);
        await browser.pause(3000);
        await Coursepage.addPhysicalcapacity(signinData.Physicalcapacity);
        await browser.pause(3000);
        await Coursepage.enterBatchstartdate(signinData.Startdate);
        await browser.pause(3000);
        await Coursepage.enterBatchenddate(signinData.Enddate);
        await browser.pause(3000);
        await Coursepage.enterBatchstarttime(signinData.Starttime);
        await browser.pause(3000);
        await Coursepage.enterBatchendtime(signinData.Endtime);
        await browser.pause(3000);
        await Coursepage.setFrequency(signinData.Frequency,signinData.Week);
        await browser.pause(3000);
        await Coursepage.selectSunday();
        await browser.pause(3000);
        await Coursepage.selectMonday();
        await browser.pause(3000);
        await Coursepage.selectTuesday();
        await browser.pause(3000);
        await Coursepage.selectWednesday();
        await browser.pause(3000);
        await Coursepage.selectThursday();
        await browser.pause(3000);
        await Coursepage.selectFriday();
        await browser.pause(3000);
        await Coursepage.selectSaturday();
        await browser.pause(3000);
        await Coursepage.clickOnsavebatch();
        await browser.pause(3000);











})
    
})
