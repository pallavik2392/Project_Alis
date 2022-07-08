const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");

describe("Verify  support can be added from students menu",function(){
    //this.retries(1)

    it("Add support from students menu",async()=> {
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

        await Studentpage.searchstudentbynumber(signinData.studentsearchbymobilenumberforverifyingpaymentdetails);
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudent();
        await browser.pause(3000);
        await Studentpage.clickOnsupport();
        await browser.pause(3000);

        await Studentpage.clickonaddticket();
        await browser.pause(3000);
        await Studentpage.entercoursetofollowup(signinData.Course);
        await browser.pause(3000);
        await Studentpage.entersubjecttofollowup(signinData.Subject);
        await browser.pause(3000);
        await Studentpage.enterdepartmenttofollowup(signinData.Department);
        await browser.pause(3000);
        await Studentpage.entercategorytofollowup(signinData.Category);
        await browser.pause(3000);
        await Studentpage.entersubcategorytofollowup(signinData.Subcategory);
        await browser.pause(3000);
        await Studentpage.entertagtofollowup(signinData.Tags);
        await browser.pause(3000);
        await Studentpage.enternextdatetoffffollowup(signinData.Nextdate);
        await browser.pause(3000);
        await Studentpage.enterstarttimetofollowup(signinData.Starttime);
        await browser.pause(3000);
        await Studentpage.enterendtime(signinData.Endtime);
        await browser.pause(3000);
        await Studentpage.enterstatustofollowup(signinData.Status);
        await browser.pause(3000);
        await Studentpage.enterprioritytofollowup(signinData.Priority);
        await browser.pause(3000);
        await Studentpage.enterchangenotetofollowup(signinData.Changenote);
        await browser.pause(3000);
        await Studentpage.clickOnsavetofollowup();
        await browser.pause(3000);
       

        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']");
        await expect(message).toHaveTextContaining("Followup added");
        await browser.pause(3000);
        



    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifycreatefollowupfromstudentmenu.png")
    })
})