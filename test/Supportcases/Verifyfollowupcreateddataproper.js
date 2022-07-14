const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Supportpage = require("../../pages/Supportpage");
var expect = require('chai').expect;


describe("Verify followup data",function(){
    //this.retries(3)

    it("followup is corret",async ()=> {
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
       // await Supportpage.uploadfile();
        //await browser.pause(3000);
        await Supportpage.clickpOnsaveticket();
        await browser.pause(6000);

        const message=await $("//div[@class='MuiAlert-message css-1w0ym84']").getText();
        await expect(message).to.equal("Followup added");
        await browser.pause(3000);

        await Supportpage.clickOnTodaysschecduletab();
        await browser.pause(3000);
        const recentaddedticket=await $("//p[contains(text(),'Payment Pending')]");
        await recentaddedticket.click();
        const course=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/child::p").getText();
        await expect(course).to.equal(signinData.Course);
        await browser.pause(3000);
        const department=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/child::p").getText();
        await expect(department).to.equal(signinData.Department);
        await browser.pause(3000);
        const priority=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/child::p").getText();
        await expect(priority).to.equal(signinData.Priority);
        await browser.pause(3000);
        const category=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/child::p").getText();
        await expect(category).to.equal(signinData.Category);
        await browser.pause(3000);
        const subcategory=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/child::p").getText();
        await expect(subcategory).to.equal(signinData.Subcategory);
        await browser.pause(3000);
        const status=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[6]/child::p").getText();
        await expect(status).to.equal(signinData.Status);
        await browser.pause(3000);

        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyfollowupdatacorrect.png")
    })
})