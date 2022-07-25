const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");
const Paymentreviewpage = require("../../pages/Paymentreviewpage");
const console = require("console");
var expect = require('chai').expect



describe("Verify discount and scholarship on billing summary tally properly fo Bajaj Finance ",function(){
   // this.retries(2)

    it(" Tally discount and scholarhip for Bajaj Finance",async()=> {
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
        await Paymentreviewpage.Selectmodes(signinData.Mode2);
        await browser.pause(3000);
        
        const discount=await $("//p[contains(text(),'Bajaj Finance')]/parent::div/parent::div/following-sibling::div/child::div/following-sibling::div/child::p").getText();
        console.log("discount is:",discount);
        const discountonbill=await $("//h6[contains(text(),'Discount for choosing: Bajaj Finance (NBFC)')]/parent::div/following-sibling::div/child::h6").getText();
        const discountbill1=discountonbill.substring(1);
        console.log("discount on Biil is:",discountbill1);
        await expect(discount).to.equal(discountbill1);
        const tutionfee=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/child::h6").getText();
        let tutionfee1= tutionfee.substring(1);
        let res1 = tutionfee1.replace(",", "");
        console.log("tution fee is",res1);

        
        const coursefee=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[5]/child::h6").getText();
        let coursefee1=coursefee.substring(1);
        let res2 = coursefee1.replace(/,/g, "");
        console.log("course fee is",res2);
        //result=tutionfee2 + coursefee2;
        let result=(parseFloat(res1) + parseFloat(res2)).toFixed(2);
        console.log("result is:",result);



        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifydicountandscholarshipfor Bajajfinance.png")
    })
})