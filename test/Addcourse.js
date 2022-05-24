const signinData = require("../Data/signindata");
const signinpage = require("../pages/signinpage");
const Coursepage = require("../pages/Coursespage");

describe("addcourse",function(){
    it("course",async() =>{
    await browser.url("https://staging-alis.wemotive.in/");
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
        await browser.pause(3000);

        await Coursepage.addScholorship(signinData.Scalarshipreedemable);
        await browser.pause(5000);
        await Coursepage.selectUpfrontmode(signinData.UpfrontdiscountType,signinData.UpfrontdiscountAmount);
        await browser.pause(7000);
       // await Coursepage.selectPayablewhenablemode(signinData.PayablediscountType,signinData.PayablediscountAmount);
        //await browser.pause(7000);
        //await Coursepage.selectBajajfinancemode(signinData.BajajdiscountType,signinData.BajajDiscountamount,signinData.BajajDownpayment,signinData.BajajmaxInstallment,signinData.BajajDocuments);
       // await browser.pause(7000);
        //await Coursepage.selectHdfcfinancemode(signinData.HDFCdiscountType,signinData.HDFCDiscountamount,signinData.HDFCDownpayment,signinData.HDFCmaxInstallment,signinData.HDFCDocuments);
        //await browser.pause(7000);
        //await Coursepage.selectK11mode(signinData.K11discountType,signinData.K11Discountamount,signinData.K11Downpayment,signinData.K11maxInstallment,signinData.K11Documents);
        //await browser.pause(5000);
        await Coursepage.clickOnsavepayment();
        await browser.pause(3000);



})
    
})
