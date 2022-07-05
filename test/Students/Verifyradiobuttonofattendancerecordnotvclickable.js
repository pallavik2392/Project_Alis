const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");

describe("Marked attendance of student can not be editable ",function(){
    this.retries(2)

    it("radio button of attendance not clickable",async()=> {
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

        await Studentpage.clickOnparticularstudent();
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudentsattendancetab();
        await browser.pause(3000);
        await Studentpage.clickOnattendancecard();
        await browser.pause(3000);
        await Studentpage.radiobuttoninattendancerecordNotclickable();
        await browser.pause(3000);


    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/radiobuttonofmarkedattendancenotclickable.png")
    })
})