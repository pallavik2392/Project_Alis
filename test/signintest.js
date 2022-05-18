//const { browser } = require("protractor");
const loginpage = require("../pages/LoginPage");

describe("Handle app login",function(){

    it("enter username", async () => {
        browser.url('https://staging-alis.wemotive.in/');
 
        browser.pause(3000);
        await loginpage.enterUsername('sa@mailinator.com');


    })
})