const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");
const Coursespage = require("../../pages/Coursespage");
var should =require('chai').should();


describe("Verify user able to  cancel admission only once ",function(){
   // this.retries(2)

    it("cancel admission  can be performed only once",async()=> {
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

        await Studentpage.searchstudentbynumber(signinData.mobilenumberofstudenttocanceladmission);
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudent();
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudentspaymenttab();
        await browser.pause(3000);
       /* await Studentpage.clickOnparticularstudentscoursestab();
        await browser.pause(3000);
        
        await Studentpage.selectparticularcoursefromstudentspaymenttab(signinData.coursenametobecancelled);
        await browser.pause(3000);
        const scholarshipamount=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/form[1]/div[1]/div[3]/div[1]/div[2]/child::p").getText();
        console.log(scholarshipamount);
        await browser.pause(3000);

        await Studentpage.enteramountinscholarshipcreditreturn(scholarshipamount);
        await browser.pause(3000);
        await Studentpage.entercancellationreason(signinData.Reasonforadmissioncancel)
        await browser.pause(3000);
        await Studentpage.clickOncanceladmissionsave();
        await browser.pause(3000);
        await Studentpage.clickOnAttendancetab();
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudentspaymenttab();
        await browser.pause(3000);*/
        //should.exist(signinData.coursenametobecancelled);

        await Studentpage.canceladmissionshouldnotexist(signinData.coursenametobecancelled);
        await browser.pause(3000);

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycanceladmissioncanbeperformedonlyonce.png")
    })
})