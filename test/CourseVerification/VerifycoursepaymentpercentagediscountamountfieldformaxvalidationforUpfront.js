const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("Verification of course payment discountamount field with percentage by passing maximum value",function(){
    this.retries(3)

    it("course  payment discount amount with percentage ",async() =>{
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
        await browser.pause(5000);
        await Coursepage.searchCourse(signinData.Verifycourse);
        await browser.pause(5000);
        await Coursepage.clickonsearchedcourse(signinData.searchedcoursetobeclicked);
        await browser.pause(5000);

        await Coursepage.clickOnpayment();
        await browser.pause(5000);
        await Coursepage.selectUpfrontmode(signinData.coursepaymentpercentagediscountamountverificationforUpfront,signinData.coursepaymentdiscontamountforpercentage);
        await browser.pause(5000);
        const message=await $("//p[@id='value-helper-text']");
        await expect(message).toHaveTextContaining("Cannot be more than 100%");

        

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/VerifycoursepaymentpercentagediscountamountfieldformaxvalidationforUpfront.png")
    })
})
