const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");
const Coursespage = require("../../pages/Coursespage");

describe("Verify  scholarship successfully added",function(){
    this.retries(2)

    it("add scholarship",async()=> {
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
        await Studentpage.clickOnscholarship();
        await browser.pause(3000);
        
        await Studentpage.clickOnAddscholarshipicon();
        await browser.pause(3000);
        await Studentpage.addCourseforscholarship(signinData.coursetoaddscholarship);
        await browser.pause(3000);
        await Studentpage.addDateforscholarship(signinData.datetoaddscholarship);
        await browser.pause(3000);
        await Studentpage.addBenefitsforscholarship(signinData.benefitstoaddscholarship);
        await browser.pause(3000);
        await Studentpage.clickOnscholarshipsave();
        await browser.pause(3000);

        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message).toHaveTextContaining("Award created successfully");
        await browser.pause(3000);
        



    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycanaddscholarshipsuccessfuly.png")
    })
})