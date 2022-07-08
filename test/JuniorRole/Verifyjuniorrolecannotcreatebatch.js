const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursespage = require("../../pages/Coursespage");

describe("verify for junior role should not able to create batch by new course buttonshould not exist",function(){
    this.retries(3)

    it("verify new course button should not be exist for junior",async()=> {
        await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.Juniorusername);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.Juniorpassword);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);
        await Coursespage.clickOncourses();
        await browser.pause(5000);

        await Coursespage.VerifyNewcoursebuttonforRolewiseaccessNotexist();
        await browser.pause(5000);

       
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyjunioraccessfornewcoursebuttondoesnotexist.png")
    })
})