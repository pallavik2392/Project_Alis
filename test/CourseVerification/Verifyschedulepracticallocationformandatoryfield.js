const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("Verify schedule tab   practical location field for mandatory field  ",function(){
    it("practical location for mandatory ",async() =>{
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
        await browser.pause(20000);
        //await Coursepage.clickOnparticularcourse(signinData.Verifycourse);
        //await browser.pause(5000);
        await Coursepage.searchCourse(signinData.Verifycourse);
        await browser.pause(20000);
        await Coursepage.clickonsearchedcourse(signinData.searchedcoursetobeclicked);
        await browser.pause(3000);

        await Coursepage.clickOnscheduletab();
        await browser.pause(3000);
        await Coursepage.clickOnAddBatch();
        await browser.pause(3000);
        await Coursepage.addPhysicalcapacity(signinData.Physicalcapacity);
        await browser.pause(3000);
        await Coursepage.clickOnsavebatch();
        await browser.pause(3000);
        
        const message=await $("//p[@id='practicalLocation-helper-text']");
        await expect(message).toHaveTextContaining("This field is required");

    })
})