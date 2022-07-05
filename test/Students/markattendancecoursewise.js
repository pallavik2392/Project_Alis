const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");

describe("Mark attendance of student course wise ",function(){
    this.retries(2)

    it("coursewise attendance",async()=> {
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
        
        await Studentpage.clickOnstudentMenu();
        await browser.pause(3000);

        await Studentpage.clickOnAttendancetab();
        await browser.pause(3000);

        await Studentpage.addcourseforattendance(signinData.courseforattendance);
        await browser.pause(3000);

        await Studentpage.addbatchforattendance(signinData.Batchforattendance);
        await browser.pause(3000);

        await Studentpage.addtopicforattendance(signinData.Topicforattendance);
        await browser.pause(3000);

        await Studentpage.setDateforattendance(signinData.dateofattendance);
        await browser.pause(3000);

        await Studentpage.saveattendance();
        await browser.pause(3000);

        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message).toHaveTextContaining("Attendance marked successfully");
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Mark attendance successfuly.png")
    })
})