//const { default: $ } = require("webdriverio/build/commands/browser/$");
const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("creation of lead with mandetoryfield",function(){
    it("mandetory field",async()=> {
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

        await Leadpage1.clickOnnewlead();
        await browser.pause(5000);

        await Leadpage1.enterFirstname(signinData.Mandatoryleadfirstname);
        await browser.pause(3000);
        await Leadpage1.enterEmail(signinData.Mandatoryleademail);
        await browser.pause(3000);
        await Leadpage1.enterPhonenumber(signinData.Mandatoryleadphone);
        await browser.pause(3000);
        await Leadpage1.enterGender(signinData.Mandatoryleadgender);
        await browser.pause(3000);
        await Leadpage1.enterDOB(signinData.MandatoryleadDOByear);
        await browser.pause(8000);
        await Leadpage1.enterconselor(signinData.Mandatoryleadconselor);
        await browser.pause(3000);
        await Leadpage1.enterCourse(signinData.MandatoryleadCourse)
        await browser.pause(3000);
        await Leadpage1.enterAcademylocation(signinData.MandatoryleadAcademy)
        await browser.pause(3000);
        await Leadpage1.enterPostalcode(signinData.MandatoryleadPincode);
        await browser.pause(3000);
        await Leadpage1.enterAddress1(signinData.Meandatoryleadflatnumber);
        await browser.pause(3000);
        await Leadpage1.enterAddress2(signinData.Mendatoryleadstreetarea);
        await browser.pause(3000);
        await Leadpage1.clickOnSave();
        await browser.pause(6000);
        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message).toHaveTextContaining("Lead added");

        

    })
})