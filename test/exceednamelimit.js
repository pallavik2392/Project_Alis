//const { default: $ } = require("webdriverio/build/commands/browser/$");
const signinData = require("../Data/signindata");
const Leadpage1 = require("../pages/Leadpage1");
const signinpage = require("../pages/signinpage");
const xcelTojson =require("./xcelTojson");

describe("overlimit",function(){
    it("firstnamelimit", async () =>{

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
        let exceedfirstname= signinData.exceedfirstname;
        await console.log("first name is:" + exceedfirstname);
        let strlength=exceedfirstname.length;
        await console.log("length of firstnameLead is: "+ strlength);
        if(strlength>30){
        await Leadpage1.enterFirstname(signinData.exceedfirstname);
        await browser.pause(3000);
        const error=await $("//p[@id='firstName-helper-text']");
        await expect(error).toHaveTextContaining("Cannot be more than 30 characters");
        await browser.saveScreenshot("./ScreenshotsforAlis/wrongvalidation.png");
      }
    })

    it("middlenamelimit", async () =>{

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
        let exceedmidlename= signinData.exceedmidlename;
        await console.log("middle name is:" + exceedmidlename);
        let strlength=exceedmidlename.length;
        await console.log("length of middlenameLead is: "+ strlength);
        if(strlength>30){
        await Leadpage1.enterMiddlename(signinData.exceedmidlename);
        await browser.pause(3000);
        const error=await $("//p[@id='middleName-helper-text']");
        await expect(error).toHaveTextContaining("Cannot be more than  characters");
        await browser.saveScreenshot("./ScreenshotsforAlis/wrongvalidmidlename.png");
      }
     })

    it("lastnamelimit", async () =>{

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
        let exceedlastname= signinData.exceedlastname;
        await console.log("last name is:" + exceedlastname);
        let strlength=exceedlastname.length;
        await console.log("length of lastnameLead is: "+ strlength);
        if(strlength>30){
        await Leadpage1.enterLastname(signinData.exceedlastname);
        await browser.pause(3000);
        const error=await $("//p[@id='lastName-helper-text']");
        await expect(error).toHaveTextContaining("Cannot be more than 30 characters");
        await browser.saveScreenshot("./ScreenshotsforAlis/wrongvalidlastname.png");
      }
     })
    

})