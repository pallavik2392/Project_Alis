const { default: $ } = require("webdriverio/build/commands/browser/$");
const signinData = require("../Data/signindata");
const signinpage = require("../pages/signinpage");
const Staffpage = require("../pages/Staffpage");

describe("Upadate Staff",function(){
    it("Staff", async()=> {
        await browser.url("https://staging-alis.wemotive.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.usercred);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(1000);
        await signinpage.clearUsername();
        await browser.pause(3000);

        await signinpage.clickOnSubmit();
        await browser.pause(5000);
        await Staffpage.clickOnstaff();
        await browser.pause(5000);
        await $("//input[@placeholder='Search']").setValue(name);
        await $("//body//div[@id='root']//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-isbt42']//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-isbt42']//div[1]//div[1]//div[2]//h5[1]").click();
        await $("//p[normalize-space()='Pooja']").clearValue();

    })
})