const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");
const Paymentreviewpage = require("../../pages/Paymentreviewpage");
const console = require("console");



describe("Verify only one radiobutton selectable at a time ",function(){
    this.retries(2)

    it(" only one radiobutton selectable at a time",async()=> {
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
        await Leadpage1.clickOnviewofstudentwhosepaymentneedtoapprovewhilereviewing(signinData.Nameofstudenttoapplyforpaymentmode,signinData.Coursenametotallydiscountandscholarhip);
        await browser.pause(3000);
        await Leadpage1.clickOnpaymenttabofreview();
        await browser.pause(3000);
        await Paymentreviewpage.Selectmodes(signinData.Mode1);
        await browser.pause(3000);
        //Here have used upfront radio button to verify and path is different than used to click radio button if upfront mode is absent need to use another mode with correct xpath
        const upfrontradiobutton = await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[4]/div[1]/div[4]/span[1]/span[1]/input[1]");
        await expect(upfrontradiobutton).toBeSelected()
        await browser.pause(3000);
        await Paymentreviewpage.Selectmodes(signinData.Mode2);
        await browser.pause(3000);
        await expect(upfrontradiobutton).not.toBeSelected();
        await browser.pause(3000);

        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verify only one radio button selectable at a time.png")
    })
})