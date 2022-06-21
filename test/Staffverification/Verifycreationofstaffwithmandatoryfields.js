const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Staffpage = require("../../pages/Staffpage");

describe("Addstaff with mandatory fields only",function(){
    it("staff with mandatory fields", async() =>{
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

        await Staffpage.clickOnstaff();
        await browser.pause(5000);
        await Staffpage.clickOnAddstaff();
        await browser.pause(5000);
        await Staffpage.enterFirstname(signinData.Mandatorystafffirstname);
        await browser.pause(3000);
        await Staffpage.enterPhonenumber(signinData.Mandatorystaffpersonalphone);
        await browser.pause(3000);
        await Staffpage.enterEmail(signinData.Mandatorystaffemail);
        await browser.pause(3000);
        await Staffpage.enterStaffRole(signinData.Mandatorystaffrole);
        await browser.pause(3000);
        await Staffpage.enterDesignation(signinData.Mandatorystaffdesignation);
        await browser.pause(3000);
        await Staffpage.enterDepartment(signinData.Mandatorystaffdepartment);
        await browser.pause(3000);
        await Staffpage.enterTeachingStaff(signinData.Mandatorystaffteaching);
        await browser.pause(3000);
        await Staffpage.enterOfficeLocation(signinData.Mandatorystaffofficelocation);
        await browser.pause(3000);
        await Staffpage.clickOnSaveStaff();
        await browser.pause(3000);

        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message).toHaveTextContaining("Staff added");

        await browser.saveScreenshot("./ScreenshotsforAlis/staff1.png");



    })
})