//const { browser } = require("protractor");
const signinData = require("../Data/signindata");
const Leadpage1 = require("../pages/Leadpage1");
const signinpage = require("../pages/signinpage");

describe("Addlead",function(){

    it("lead", async () => {
        await browser.url("https://staging-alis.wemotive.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.usercred);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);

        await Leadpage1.clickOnnewlead();
        await browser.pause(5000);
        await Leadpage1.enterFirstname(signinData.firstnameLead);
        await browser.pause(3000);
        await Leadpage1.enterMiddlename(signinData.middlenameLead);
        await browser.pause(3000);
        await Leadpage1.enterLastname(signinData.lastnameLead);
        await browser.pause(3000);
        await Leadpage1.enterEmail(signinData.emailLead);
        await browser.pause(3000);
        await Leadpage1.enterPhonenumber(signinData.phnumber1);
        await browser.pause(3000);
        await Leadpage1.enterAlternatePhonenumber(signinData.phnumber2)
        await browser.pause(3000);
        await Leadpage1.enterMobilenumber(signinData.mobNumber)
        await browser.pause(3000);
        await Leadpage1.enterGender(signinData.genderName);
        await browser.pause(3000);
        await Leadpage1.enterDOB(signinData.lyear,signinData.lmonth,signinData.lday);
        await browser.pause(8000);

        await Leadpage1.enterOccupation(signinData.occupation);
        await browser.pause(3000);
        await Leadpage1.entercommunicationLangauge(signinData.communicationlangauge);
        await browser.pause(3000);
        await Leadpage1.enterconselor(signinData.conselor);
        await browser.pause(3000);
        await Leadpage1.enterCourse(signinData.course)
        await browser.pause(3000);
        await Leadpage1.enterAcademylocation(signinData.academylocation)
        await browser.pause(3000);
        await Leadpage1.enterCourselangauge(signinData.courselangauge)
        await browser.pause(3000);
        await Leadpage1.enterPostalcode(signinData.pincode);
        await browser.pause(3000);
        await Leadpage1.enterAddress1(signinData.addresstext1);
        await browser.pause(3000);
        await Leadpage1.enterAddress2(signinData.addresstext2);
        await browser.pause(3000);
        await Leadpage1.enterLandmark(signinData.Land);
        await browser.pause(3000);
        await Leadpage1.clickOnSave();
        await browser.pause(3000);

    })
})