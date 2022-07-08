const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");
const Coursespage = require("../../pages/Coursespage");

describe("Verify  user can cancel admission",function(){
    this.retries(2)

    it("cancel admission",async()=> {
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
        
        await Studentpage.clickOncanceladmission();
        await browser.pause(3000);
        await Studentpage.enterscholarshipcreditamount(signinData.scholarshipcreditreturn);
        await browser.pause(3000);
        await Studentpage.entercancellationreason(signinData.cancellationreason);
        await browser.pause(3000);
        await Studentpage.clickOncanceladmissionsave();
        await browser.pause(3000);

        



    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycan canceladmissionsuccessfully.png")
    })
})