const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Staffpage = require("../../pages/Staffpage");


describe("Verify staff profile details cortect",function(){
    this.retries(3)

    it("staff", async() =>{
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

        await Staffpage.clickOnstaff();
        await browser.pause(5000);
       /* await Staffpage.clickOnAddstaff();
        await browser.pause(5000);
        await Staffpage.enterFirstname(signinData.Firstnamestaff);
        await browser.pause(3000);
        await Staffpage.enterMiddlename(signinData.Middlenamestaff);
        await browser.pause(3000);
        await Staffpage.enterLastname(signinData.Lastnamestaff);
        await browser.pause(3000);
        await Staffpage.enterPhonenumber(signinData.Personelphone);
        await browser.pause(3000);
        await Staffpage.enterworkPhonenumber(signinData.Workphone);
        await browser.pause(3000);
        await Staffpage.enterEmail(signinData.Email);
        await browser.pause(3000);
        await Staffpage.enterStaffRole(signinData.Role);
        await browser.pause(3000);
        await Staffpage.enterDesignation(signinData.Designation);
        await browser.pause(3000);
        await Staffpage.enterDepartment(signinData.Department);
        await browser.pause(3000);
        await Staffpage.enterTeachingStaff(signinData.TeachingStaff);
        await browser.pause(3000);
        await Staffpage.enterOfficeLocation(signinData.OfficeLocation);
        await browser.pause(3000);
        await Staffpage.clickOnSaveStaff();
        await browser.pause(3000);

        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']").getText();
        await expect(message).to.equal("Staff added");*/
        await Staffpage.searchbyname(signinData.Firstnamestaff)
        await browser.pause(8000);
        await Staffpage.clickOnParticularstaff();
        await browser.pause(5000);
        const firstname=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[2]/child::p");
        await expect(firstname).toHaveTextContaining(signinData.Firstnamestaff);
        await browser.pause(3000);
        const lastname=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[2]/child::p");
        await expect(lastname).toHaveTextContaining(signinData.Lastnamestaff);
        await browser.pause(3000);
        const middlename=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[2]/div[2]/child::p");
        await expect(middlename).toHaveTextContaining(signinData.Middlenamestaff);
        await browser.pause(3000);
        const personelphone=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[4]/div[2]/child::p");
        await expect(personelphone).toHaveTextContaining(signinData.Personelphone);
        await browser.pause(3000);
        const workphone=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[5]/div[2]/child::p");
        await expect(workphone).toHaveTextContaining(signinData.Workphone);
        await browser.pause(3000);
        const email=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[6]/div[2]/child::p");
        await expect(email).toHaveTextContaining(signinData.Email);
        await browser.pause(3000);
        const role=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[7]/div[2]/child::p");
        await expect(role).toHaveTextContaining(signinData.Role);
        await browser.pause(3000);
        const designation=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[8]/div[2]/child::P");
        await expect(designation).toHaveTextContaining(signinData.Designation);
        await browser.pause(3000);
        const department=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[9]/div[2]/child::p");
        await expect(department).toHaveTextContaining(signinData.Department);
        await browser.pause(3000);
        const teachingstaff=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[10]/div[2]/child::p");
        await expect(teachingstaff).toHaveTextContaining(signinData.TeachingStaff);
        await browser.pause(3000);
        const officelocation=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[11]/div[2]/child::p");
        await expect(officelocation).toHaveTextContaining(signinData.OfficeLocation);
        await browser.pause(3000);
      


    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/erifystaffdetailscorrect.png")
    })
})