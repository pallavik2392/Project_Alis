const signinData = require("../Data/signindata");
const signinpage = require("../pages/signinpage");
const Coursepage = require("../pages/Coursepage");

describe("addcourse",function(){
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
        await Coursepage.clickOncourses();
        await browser.pause(5000);
        await Coursepage.clickOnNewcourse();
        await browser.pause(5000);

    it("overview",async() =>{
        await Coursepage.enterCoursename(signinData.)
    })
})
