const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");
const Coursespage = require("../../pages/Coursespage");

describe("Verify courses add to wallet's reasons field for max validation ",function(){
    this.retries(2)

    it("reasons field for max validation",async()=> {
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
        
        await Studentpage.clickOnstudentMenu();
        await browser.pause(3000);

        await Studentpage.searchstudentbynumber(signinData.studentsearchbymobilenumberforverifyingpaymentdetails);
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudent();
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudentspaymenttab();
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudentscoursestab();
        await browser.pause(3000);
        
        await Studentpage.clickOnaddtowallet();
        await browser.pause(3000);
        await Studentpage.entertextinaddtowalletreasonfield(signinData.greterthan250limit);
        await browser.pause(3000);
        const message=await $("//p[@id='reason-helper-text']");
        await expect(message).toHaveTextContaining("Cannot be more than 250 characters");
        await browser.pause(3000);




    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyreasonsfieldofaddtowalletformaxvalidation.png")
    })
})