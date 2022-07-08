const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursepage = require("../../pages/Coursespage");

describe("Verification of course  status filter",function(){
    this.retries(3)

    it("course status filter",async() =>{
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
        await browser.pause(5000);
        
        await Coursepage.Verifystatusfilter(signinData.Statusofcoursetobesearched);
        await browser.pause(5000);
        const course=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]");
        await course.click();
        await browser.pause(5000);
        
        const status=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[3]/label[1]/span[1]/following-sibling::span");
        await expect(status).toHaveTextContaining(signinData.Statusofcoursetobesearched);
        await browser.pause(5000);


    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycoursesearchfunctionality.png")
    })
    
})