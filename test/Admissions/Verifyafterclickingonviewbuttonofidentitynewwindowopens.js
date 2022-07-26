const console = require("console");
const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");
var assert = require('chai').assert;
var expect = require('chai').expect



describe("verify new window opens after clicking on view button of  ",function(){
    //this.retries(2)
    

    it("Verify new window opens or not",async()=> {
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
        await browser.pause(3000);
        await Leadpage1.clickOnviewofstudentwhosepaymentneedtoapprovewhilereviewing(signinData.Nameofstudenttoapplyforpaymentmode,signinData.Courseofstudenttoapplyforpaymentmode);
        await browser.pause(3000);
        var parentwindow=await browser.getWindowHandle();
        await browser.pause(6000);
        console.log("parent window is ", parentwindow);
        

        await Leadpage1.clickOn1stdocumentviewbutton();
        await browser.pause(6000);

        var allwindow=await browser.getWindowHandles();
        await browser.pause(6000);
        console.log("Result is :",allwindow);
        console.log("first window id is:",allwindow[0]);
        console.log("second window id is:",allwindow[1]);
        await expect(allwindow[0]).not.equal(allwindow[1]);

       

     })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyrejectbuttonckickableforeducation.png")
    })
})