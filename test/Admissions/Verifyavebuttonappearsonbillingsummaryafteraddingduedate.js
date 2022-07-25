const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");
const Paymentreviewpage = require("../../pages/Paymentreviewpage");


describe("save button should appears only after adding due date ",function(){
   // this.retries(2)

    it(" save button should appears only after adding due date",async()=> {
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
        await Leadpage1.clickOnApplicationtab();
        await browser.pause(8000);
        await Leadpage1.clickOnviewofstudentwhosepaymentneedtoapprovewhilereviewing(signinData.Nameofstudenttoapplyforpaymentmode,signinData.Courseofstudenttoapplyforpaymentmode);
        await browser.pause(3000);
        await Leadpage1.clickOnpaymenttabofreview();
        await browser.pause(3000);
        await Paymentreviewpage.Selectmodes(signinData.paymentapplyforstudent);
        await browser.pause(3000);
        await Paymentreviewpage.savebuttonofbillingsummaryNotexist();
        await browser.pause(3000);
        await Paymentreviewpage.Enterduedate(signinData.paymentduedate);
        await browser.pause(3000);
        //await PaymentPage.savebuttonofbillingsummaryshouldExist();
        await browser.pause(3000);



        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifysavebuttonappearsafteraddingduedatewhilereviewing.png")
    })
})