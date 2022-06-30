const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Coursespage = require("../../pages/Coursespage");

describe("verify for junior role should  able to select particulr course",function(){
    this.retries(3)

    it("verify particular course selecable for junior",async()=> {
        await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.Juniorusername);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.Juniorpassword);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);
        await Coursespage.clickOncourses();
        await browser.pause(5000);

        await Coursespage.Verifyparticularcourseclickable();
        await browser.pause(5000);

       
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyjuniorabletoselectparticularcourse.png")
    })
})