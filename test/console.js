
//const { browser } = require("protractor")
const Leadpage = require("../pages/Leadpage")
const signinpage=require("../pages/signinpage")
const signinData = require("../Data/signindata");


describe("elements handle",function(){
    it("gettetx",async () => {

        await browser.url('https://staging-alis.wemotive.in/');
         await browser.maximizeWindow();
         await  browser.pause(3000);
         await signinpage.enterUsername(signinData.usercred);
         await browser.pause(1000);
         await signinpage.enterPassword(signinData.passcred);
         await browser.pause(1000);
         await signinpage.clickOnSubmit();
        //browser.pause(5000);
        await browser.pause(5000);

        await Leadpage.clickOnnewlead();
        await browser.pause(5000);

        await  Leadpage.getTextForLi;
    })
})