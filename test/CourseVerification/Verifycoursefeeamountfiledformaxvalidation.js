const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");
//const { default: $ } = require("webdriverio/build/commands/browser/$");

describe("verify fees amount field by passing maximum value",function(){
    this.retries(3)

    it("verify error message for amount field",async() =>{
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
        await browser.pause(8000);
        await Coursepage.searchCourse(signinData.Verifycourse);
        await browser.pause(5000);
        await Coursepage.clickonsearchedcourse(signinData.searchedcoursetobeclicked);
        await browser.pause(5000);

        await Coursepage.clickOnfeestab();
        await browser.pause(1000);
        await Coursepage.onlyclickonaddfee();
        await browser.pause(1000);
        await Coursepage.addonlyfeeamount(signinData.coursefeeamount);
        await browser.pause(5000);

        //await Coursepage.Verifyerror();
        //await browser.pause(1000);

        const message=await $("//p[@id='value-helper-text']");
       await expect(message).toHaveTextContaining("Only digits are allowed");
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycoursefeeamountfieldfoemaxvalidation.png")
    })
})