const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");
const Coursespage = require("../../pages/Coursespage");

describe("Verify student assocaition list and list while marking attendance is same ",function(){
   // this.retries(2)

    it("Student association list",async()=> {
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

        await Studentpage.addcourseforattendance(signinData.Courseforattendancematching);
        await browser.pause(3000);

        await Studentpage.addbatchforattendance(signinData.Batchforattendancematching);
        await browser.pause(3000);
  
        const student1=await $("//tbody/tr[1]/td[1]/span[1]/div[1]/div[2]/div[1]/child::p").getText();
        console.log(student1);
        const student2=await $("//tbody/tr[2]/td[1]/span[1]/div[1]/div[2]/div[1]/child::p").getText();
        console.log(student2);

        await Coursespage.clickOncourses();
        await browser.pause(20000);
        await Coursespage.searchCourse(signinData.Courseforattendancematching);
        await browser.pause(20000);
        await Coursespage.clickonsearchedcourse(signinData.Courseforattendancematching);
        await browser.pause(3000);
        await Coursespage.clickOnscheduletab();
        await browser.pause(3000);
        await Coursespage.clickOnStudentassociation();
        await browser.pause(3000);

        const Student11=await $("//body[1]/div[1]/div[1]/div[2]/div[4]/div[3]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/span[1]/div[1]/child::p");
        await expect(Student11).toHaveTextContaining(student1);

        const Student22=await $("//body[1]/div[1]/div[1]/div[2]/div[4]/div[3]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[2]/span[1]/div[1]/child::p");
        await expect(Student22).toHaveTextContaining(student2);
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/verifyattendance of student.png")
    })
})