//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { browser } = require("protractor");
//const { browser } = require("protractor");
//const { browser } = require("protractor");
const signinData = require("../Data/signindata");
const signinpage = require("../pages/signinpage");
const Staffpage = require("../pages/Staffpage");

describe("Upadate Staff",function(){
    it("Staff", async()=> {
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
        await Staffpage.clickOnstaff();
        await browser.pause(5000);

        await Staffpage.searchbyname(signinData.upadatestaffname);
        await browser.pause(3000);
        await Staffpage.clickOnParticularstaff();
        await browser.pause(5000);
        await Staffpage.updateFirstname(signinData.nametoreplacefirstname);
        await browser.pause(3000);
        await Staffpage.enterFirstname(signinData.updatefirstname);
        await browser.pause(3000);

        await Staffpage.updatemiddlename(signinData.nametoreplacemidlename);
        await browser.pause(3000);
        await Staffpage.enterMiddlename(signinData.updatemiddlename);
        await browser.pause(3000);

        await Staffpage.updatelastname(signinData.nametoreplace);
        await browser.pause(3000);
        await Staffpage.enterLastname(signinData.updatestafflastname);
        await browser.pause(3000);

        await Staffpage.updatePersonelphone(signinData.numbertoreplacepersonel);
        await browser.pause(3000);
        await Staffpage.enterPhonenumber(signinData.updatepersonalphone);
        await browser.pause(3000);

        await Staffpage.updateWorkphone(signinData.numbertoreplaceworkphone);
        await browser.pause(3000);
        await Staffpage.enterworkPhonenumber(signinData.updateworkphone);
        await browser.pause(3000);

        await Staffpage.updateEmail(signinData.emailtoreplace);
        await browser.pause(3000);
        await Staffpage.enterEmail(signinData.updateemail);
        await browser.pause(3000);


    })
})