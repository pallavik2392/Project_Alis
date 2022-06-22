const signinData = require("../Data/signindata");
const signinpage = require("../pages/signinpage");

describe("demo for organisation",function(){

    it("signin",async () => {

        await browser.url("https://staging-alis.wemotive.in/organization");
        console.log(browser.getUrl());
        await browser.pause(5000);
        await signinpage.enterOrganizationcode(signinData.organizationcode)
        await browser.pause(5000);
        await signinpage.clickOnOrganization();
        await browser.pause(5000);

       await signinpage.enterUsername(signinData.usercred);
        await browser.pause(5000);


       await signinpage.enterPassword(signinData.passcred);
        await browser.pause(8000);


        await signinpage.clickOnSubmit();
        await browser.pause(10000);

       
    })
})