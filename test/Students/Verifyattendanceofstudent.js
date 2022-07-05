const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");
const Coursespage = require("../../pages/Coursespage");

describe("Verify attendance of student ",function(){
    //this.retries(2)

    it("Verify student present for batch of course for which its attendance marked",async()=> {
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

        await Studentpage.searchstudentbynumber(signinData.Studentsearchedbymobilenumber);
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudent();
        await browser.pause(3000);
        await Studentpage.clickOnparticularstudentsattendancetab();
        await browser.pause(3000);
        const course=await $("//h6[@class='MuiTypography-root MuiTypography-h6 css-1ri25d']").getText();
        const batchid=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/child::h5").getText();
        const studentid=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[3]/div[1]/child::h4").getText();
        await Coursespage.clickOncourses();
        await browser.pause(3000);
        const particularcourse=await $("//h5[contains(text(),'"+course+"')]");
        await particularcourse.click();
        await browser.pause(3000);
        await Coursespage.clickOnscheduletab();
        await browser.pause(3000);
        const studentassociation=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[6]/button[2]");
        await studentassociation.click();
        await browser.pause(3000);
        const schedulrcoursename=await $("//body/div[@id='root']/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/child::h4");
        await expect(schedulrcoursename).toHaveTextContaining(course);
        await browser.pause(3000);
       /* const schedulebatchid=await $("//body/div[@id='root']/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[6]/child::h6");
        await expect(schedulebatchid).toHaveTextContaining(batchid);
        await browser.pause(3000);*/
        const idclickable=await $("//p[contains(text(),'"+studentid+"')]");
        await idclickable.doubleClick();
        await browser.pause(3000);

    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyattendanceofstudent.png")
    })
})