const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");
const Paymentreviewpage = require("../../pages/Paymentreviewpage");


describe("Verify discount combination ",function(){
    this.retries(2)

    it(" Discount which not allowed with another discount",async()=> {
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
        await Leadpage1.clickOnviewofstudentwhosepaymentneedtoapprovewhilereviewing(signinData.Nameofstudenttoapplyforpaymentmode,signinData.Coursenametotallydiscountandscholarhip);
        await browser.pause(3000);
        await Leadpage1.clickOnpaymenttabofreview();
        await browser.pause(3000);
        await Paymentreviewpage.Selectmodes(signinData.Mode1);
        await browser.pause(3000);
        await Paymentreviewpage.clickOnofdiscount1radiobutton();
        await browser.pause(3000);
       
        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message).toHaveTextContaining("This offer cannot be combined with other discounts");



        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifydiscountallowedcannotcpombinewithdiscount.png")
    })
})