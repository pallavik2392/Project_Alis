const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");
const Paymentreviewpage = require("../../pages/Paymentreviewpage");


describe("Verify add transaction on application ",function(){
    //this.retries(2)

    it(" Verify add transaction",async()=> {
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
        await Leadpage1.clickOnviewbuttonofPaymentstartedstatus();
        await browser.pause(3000);
        await Leadpage1.clickOnpaymenttabofreview();
        await browser.pause(3000);
        
        await Paymentreviewpage.clickOnAddtransaction();
        await browser.pause(3000);
        await Paymentreviewpage.enterpatmentmethod(signinData.Paymentmethod);
        await browser.pause(3000);
        const balancedue=await $("//h6[normalize-space()='Balance Due']/parent::div/following-sibling::div/child::h6").getText();
        const balance=balancedue.substring(1);
        await Paymentreviewpage.enterpaymentamount(balance);
        await browser.pause(3000);
        await Paymentreviewpage.Enterpaymentdate(signinData.Paymentdate);
        await browser.pause(3000);
        await Paymentreviewpage.enterstatus(signinData.paymentStatus);
        await browser.pause(3000);
        await Paymentreviewpage.clickonsaveoftransaction();
        await browser.pause(3000);

        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyaddtransaction.png")
    })
})