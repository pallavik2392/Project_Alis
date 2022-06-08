const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Staffpage = require("../../pages/Staffpage");

describe("Addstaff",function(){
    it("staff", async() =>{
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
        await Staffpage.enterFirstname(signinData.Firstnamestaff);
        await browser.pause(3000);
        await Staffpage.enterMiddlename(signinData.Middlenamestaff);
        await browser.pause(3000);
        await Staffpage.enterLastname(signinData.Lastnamestaff);
        await browser.pause(3000);
        await Staffpage.enterPhonenumber(signinData.Personelphone);
        await browser.pause(3000);
        await Staffpage.enterworkPhonenumber(signinData.Workphone);
        await browser.pause(3000);
        await Staffpage.enterEmail(signinData.Email);
        await browser.pause(3000);
        await Staffpage.enterStaffRole(signinData.Role);
        await browser.pause(3000);
        await Staffpage.enterDesignation(signinData.Designation);
        await browser.pause(3000);
        await Staffpage.enterDepartment(signinData.Department);
        await browser.pause(3000);
        await Staffpage.enterTeachingStaff(signinData.TeachingStaff);
        await browser.pause(3000);
        await Staffpage.enterOfficeLocation(signinData.OfficeLocation);
        await browser.pause(3000);
        await Staffpage.clickOnSaveStaff();
        await browser.pause(3000);




    })
})