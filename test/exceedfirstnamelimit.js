//const { default: $ } = require("webdriverio/build/commands/browser/$");
const signinData = require("../Data/signindata");
const Leadpage1 = require("../pages/Leadpage1");
const signinpage = require("../pages/signinpage");
const xcelTojson =require("../test/xcelTojson");
//var assert=require("assert");
//var expect=require('expect-webdriverio');
//import expect from 'expect-webdriverio';

describe("overlimit",function(){
    it("limit", async () =>{

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


        let firstnameLead= xcelTojson.testConfig.firstnameLead;
        await console.log("first name is:" + firstnameLead);
        let strlength=firstnameLead.length;
        await console.log("length of firstnameLead is: "+ strlength);

        if(strlength>30){

        await Leadpage1.enterFirstname(signinData.firstnameLead);
        await browser.pause(3000);
        
        const error=await $("//p[@id='firstName-helper-text']");
        await expect(error).toHaveTextContaining("Cannot be more than 30 ");
        await browser.saveScreenshot("./ScreenshotsforAlis/wrongvalidation.png");

            
        
        
        }

    })
})