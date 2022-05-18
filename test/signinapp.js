const signinData = require("../Data/signindata");
const signinpage = require("../pages/signinpage");

describe("demo",function(){

    it("signin",async () => {

        await browser.url("https://staging-alis.wemotive.in/");
        console.log(browser.getUrl());
        await browser.pause(5000);

       await signinpage.enterUsername(signinData.usercred);
        //const username = await $("input[id='username']");
        //await username.setValue(signinData.usercred);
        await browser.pause(5000);


        await signinpage.enterPassword(signinData.passcred);
        //const password = await $("input[id='password']");
        //await password.setValue(signinData.passcred);
        await browser.pause(8000);


        await signinpage.clickOnSubmit();
       // const Btn = await $("button[type='submit']");
        //await Btn.click();
        await browser.pause(10000);

       // const NewleadBtn = await $("button[type='button']");
        //await NewleadBtn.click();
        //browser.pause(10000);

    })
})