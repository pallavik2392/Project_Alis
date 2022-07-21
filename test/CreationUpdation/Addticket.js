const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Supportpage = require("../../pages/Supportpage");

describe("Addticket",function(){
    //this.retries(3)

    it("ticket",async ()=> {
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

        await Supportpage.clickOnsupport();
        await browser.pause(3000);
        await Supportpage.clickOnnewticket();
        await browser.pause(3000);
        await Supportpage.enterStudent(signinData.Student);
        await browser.pause(3000);
        await Supportpage.enterCourse(signinData.Course);
        await browser.pause(3000);
        await Supportpage.enterSubject(signinData.Subject);
        await browser.pause(3000);
        await Supportpage.enterDepartment(signinData.Department);
        await browser.pause(3000);
        await Supportpage.enterCategory(signinData.Category);
        await browser.pause(3000);
        await Supportpage.enterSubcategory(signinData.Subcategory);
        await browser.pause(3000);
        await Supportpage.enterTags(signinData.Tags);
        await browser.pause(3000);
        await Supportpage.enterNextdate(signinData.Nextdate);
        await browser.pause(3000);
        await Supportpage.enterStarttime(signinData.Starttime);
        await browser.pause(3000);
        await Supportpage.enterEndtime(signinData.Endtime);
        await browser.pause(3000);
        await Supportpage.enterStatus(signinData.Status);
        await browser.pause(3000);
        await Supportpage.enterPriority(signinData.Priority);
        await browser.pause(3000);
        await Supportpage.enterChangenote(signinData.Changenote);
        await browser.pause(3000);
        await Supportpage.uploadfile();
        await browser.pause(3000);
        await Supportpage.clickpOnsaveticket();
        await browser.pause(6000);

        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message).toHaveTextContaining("Followup added");

        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/onfailure.png")
    })
})