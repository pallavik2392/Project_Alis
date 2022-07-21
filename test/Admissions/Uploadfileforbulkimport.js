const path = require('path');
const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Leadpage1 = require('../../pages/Leadpage1');

describe("Upload file", ()=>{
    it("Be able to upload file",async ()=>{
        await browser.url("https://staging-alis.wemotive.in/organization");
        console.log(browser.getUrl());
        await browser.pause(5000);
        await signinpage.enterOrganizationcode(signinData.organizationcode)
        await browser.pause(5000);
        await signinpage.clickOnOrganization();
        await browser.pause(5000);

       await signinpage.enterUsername(signinData.usercred);
        await browser.pause(5000);


       await signinpage.enterPassword(signinData.passcred);
        await browser.pause(8000);


        await signinpage.clickOnSubmit();
        await browser.pause(10000);

        await Leadpage1.clickOnBulkimport();
        await browser.pause(5000);

        const inputdiv=await $("input[type='file']");
        const input =await $("(//input[@type='file'])[1]");
        const filePath = path.join(__dirname,'../sampleCsv (25).csv');
        const remoteFilePath = await browser.uploadFile(filePath);
        browser.pause(9000);

        browser.execute(function(){
            document.querySelector("input[type='file']").style.display = 'block'

        })
        inputdiv.waitForDisplayed();
        browser.pause(5000);

        await input.setValue(remoteFilePath);
        browser.pause(9000);
        await Leadpage1.clickOnuploadbulkfile();
        browser.pause(5000);

        const message= await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[4]/p[1]");
        await expect(message).toHaveTextContaining("Upload successful: Refreshing data...")

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/uploadfileforbulkimport.png")
    })
})