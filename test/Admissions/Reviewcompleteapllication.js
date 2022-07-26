const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");
const Paymentreviewpage = require("../../pages/Paymentreviewpage");
const console = require("console");



describe("Verify complete application ",function(){
   // this.retries(2)

    it(" complete application Review",async()=> {
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
        await Leadpage1.clickOnviewofstudentwhosepaymentneedtoapprovewhilereviewing(signinData.nameofStudenttoreviewapplication,signinData.nameofCoursetoreviewapplication);
        await browser.pause(3000);
        /*await Leadpage1.clickOnVerify1stdocument();
        await browser.pause(3000);
        await Leadpage1.clickOnVerify2nddocument();
        await browser.pause(3000);
        await Leadpage1.clickOnVerify3rddocument();
        await browser.pause(3000);
        await Leadpage1.clickOnidentityapprovebutton();
        await browser.pause(3000);
        await Leadpage1.clickonEducationapprovebutton();
        await browser.pause(3000);
        await Leadpage1.clickOnapproveofhistorytab();
        await browser.pause(3000);
        await Leadpage1.clickOnskipofbatchtab();
        await browser.pause(3000);*/
        await Leadpage1.clickOnpaymenttabofreview();
        await browser.pause(3000);
        await Paymentreviewpage.Enterduedate(signinData.paymentduedate);
        await browser.pause(3000);
        await Paymentreviewpage.Selectmodes(signinData.Mode2);
        await browser.pause(3000);
        await Paymentreviewpage.clickonsaveoftransaction();
        await browser.pause(3000);
        
        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verify complete application review.png")
    })
})