const signinData = require("../Data/signindata");
const signinpage = require("../pages/signinpage");
const Supportpage = require("../pages/Supportpage");
const Studentpage = require("../pages/Studentpage")

describe("Updateticket",function(){
    it("ticket",async ()=> {
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
        await Studentpage.searchstudent(signinData.searchstudenttoupdateticket);
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudent();
        await browser.pause(3000);
        await Studentpage.clickOnsupport();
        await browser.pause(3000);



    })
})