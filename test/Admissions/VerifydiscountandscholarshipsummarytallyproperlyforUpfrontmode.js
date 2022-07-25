const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");
const Paymentreviewpage = require("../../pages/Paymentreviewpage");
const console = require("console");
var expect = require('chai').expect



describe("Verify discount and scholarship on billing summary tally properly ",function(){
   // this.retries(2)

    it(" Tally discount and scholarhip",async()=> {
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
        await Paymentreviewpage.Selectmodes(signinData.paymentapplyforstudent);
        await browser.pause(3000);
        
        const discount=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[3]/div[1]/div[1]/div[2]/p[1]/parent::div/parent::div/following-sibling::div/child::div/following-sibling::div/child::p").getText();
        console.log("discount is:",discount);
        const discountonbill=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[8]/child::h6").getText();
        console.log("discount on Biil is:",discountonbill);
        await expect(discount).to.equal(discountonbill);




        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifydicountandscholarship.png")
    })
})