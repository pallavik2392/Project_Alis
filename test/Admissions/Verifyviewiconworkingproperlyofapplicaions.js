const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify view icon   working fine for applications ",function(){
    this.retries(2)

    it("view icon for applications",async()=> {
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
        await browser.pause(3000);

        await Leadpage1.clickOnviewicon();
        await browser.pause(6000);

        
        const message=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/span[1]/h4[1]");
        await expect(message).toHaveTextContaining("IDENTITY");
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyviewiconforapplications.png")
    })
})