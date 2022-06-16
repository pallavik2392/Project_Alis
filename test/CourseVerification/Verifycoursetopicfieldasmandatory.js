const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");
const { default: $ } = require("webdriverio/build/commands/browser/$");

describe("verify topic field error message for mandatory sign",function(){
    it("verify error message",async() =>{
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
        await Coursepage.clickOncourses();
        await browser.pause(8000);
        await Coursepage.searchCourse(signinData.Verifycourse);
        await browser.pause(5000);
        await Coursepage.clickonsearchedcourse(signinData.searchedcoursetobeclicked);
        await browser.pause(5000);

        await Coursepage.clickOncirriculum();
        await browser.pause(1000);
        await Coursepage.onlyclickaddtopic();
        await browser.pause(5000);
        await Coursepage.onlyclickonaddtopicsave();
        await browser.pause(5000);

        const message=await $("//p[@id='topic-helper-text']");
        await expect(message).toHaveTextContaining("This field is required");
    })
})