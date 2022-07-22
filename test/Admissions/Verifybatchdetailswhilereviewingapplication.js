const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("Reivew application  ",function(){
    this.retries(2)

    it(" Review application",async()=> {
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
        await Leadpage1.clickOnApplicationtab();
        await browser.pause(8000);
        await Leadpage1.clickOnviewbuttonofApprovedstatus();
        await browser.pause(3000);
        await Leadpage1.clickOnbatchtabofreview();
        await browser.pause(3000);
        await Leadpage1.Doubleclickonbatchlocationfield();
        await browser.pause(3000);
        await Leadpage1.Enterbatchlocation(signinData.Batchlocationforreview);
        await browser.pause(3000);
        await Leadpage1.Doubleclickonbatchmodefield();
        await browser.pause(3000);
        await Leadpage1.Enterbatchlearningmode(signinData.learningmodeforreview);
        await browser.pause(3000);
        await Leadpage1.Doubleclickonbatchlangaugefield();
        await browser.pause(3000);
        await Leadpage1.Enterbatchcourselangauge(signinData.courselangaugeforreview);
        await browser.pause(5000);
        await Leadpage1.Doubleclickonbatchfield();
        await browser.pause(5000);
        await Leadpage1.Enterbatchforreview(signinData.Batchforreview)
        await browser.pause(3000);

        const startdate=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[5]/div[2]/child::p");
        await expect(startdate).toHaveTextContaining(signinData.startdate);
        await browser.pause(3000);
        const enddate=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[6]/div[2]/child::p");
        await expect(enddate).toHaveTextContaining(signinData.enddate);
        await browser.pause(3000);
        const frequency=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[7]/div[1]/div[1]/div[2]/child::p");
        await expect(frequency).toHaveTextContaining(signinData.Frequency);
        await browser.pause(3000);
        const repeats=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[7]/div[1]/div[2]/div[2]/child::p");
        await expect(repeats).toHaveTextContaining(signinData.repeats);
        await browser.pause(3000);
        const starttime=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[9]/div[2]/child::p");
        await expect(starttime).toHaveTextContaining(signinData.starttime);
        await browser.pause(3000);
        const endtime=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[10]/div[2]/child::p");
        await expect(endtime).toHaveTextContaining(signinData.endtime);
        await browser.pause(3000);

        const Batchname=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[11]/div[2]/child::p");
        await expect(Batchname).toHaveTextContaining(signinData.Batchforreview);
        await browser.pause(3000);

       /* const Monday=await $("//button[normalize-space()='M']");
        await expect(Monday).toBeSelected();
        await browser.pause(3000);
        const Tueday=await $("//button[normalize-space()='T']");
        await expect(Tueday).toBeSelected();
        await browser.pause(3000);
        const Wednsday=await $("//button[normalize-space()='W']");
        await expect(Wednsday).toBeSelected();
        await browser.pause(3000);
        const Thursday=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[11]/div[1]/div[1]/button[5]");
        await expect(Thursday).toBeSelected();
        await browser.pause(3000);*/



        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyreviewapplication.png")
    })
})