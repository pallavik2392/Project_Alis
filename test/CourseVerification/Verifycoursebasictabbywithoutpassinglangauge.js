const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");
//const { default: $ } = require("webdriverio/build/commands/browser/$");

describe("basic yab verification for langauge of instruction field",function(){
    this.retries(3)

    it("verify msg for langauge of instruction field",async() =>{
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
        await browser.pause(10000);
        //await Coursepage.clickOnparticularcourse(signinData.Verifycourse);
        //await browser.pause(5000);
        await Coursepage.searchCourse(signinData.Verifycourse);
        await browser.pause(5000);
        await Coursepage.clickonsearchedcourse(signinData.searchedcoursetobeclicked);
        await browser.pause(5000);

        await Coursepage.clickOnBasictab();
        await browser.pause(3000);


        await Coursepage.enterCourseLocation(signinData.coursebasicbycourselocation);
        await browser.pause(3000);
        await Coursepage.enterPracticalRequirement(signinData.coursebasicbypracticalrequirement);
        await browser.pause(3000);
        await Coursepage.enterMedicalRequirement(signinData.coursebasicbymedicalrequirement);
        await browser.pause(3000);
        await Coursepage.enterModesOfInstruction(signinData.coursebasicbymodesofinstruction);
        await browser.pause(3000);
        await Coursepage.clickOnBasicsave();
        await browser.pause(3000);

       

        const message=await $("//p[@id='language-helper-text']");
        await expect(message).toHaveTextContaining("This field is required");


    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycoursebasictabbywithoutpassinglangauge.png")
    })
})