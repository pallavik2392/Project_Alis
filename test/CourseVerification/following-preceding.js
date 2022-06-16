const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");

describe("trail on following and preceding sibling",() =>{
    it("trail test", async ()=> {
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

       /* await Coursepage.enterCoursename(signinData.Coursename);
        await browser.pause(5000);
        await Coursepage.enterShortCode(signinData.Shortcode);
        await browser.pause(5000);
        */
        const coursename=await $("//input[@id='name']");
        await coursename.setValue('health');
        const shortcode=await $("//input[@id='shortName']");
        await shortcode.setValue('HT');
        
        const save=await $("//i[@class='flaticon-diskette']");
        await save.click();

    })
})