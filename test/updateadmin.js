const signinpage = require("../pages/signinpage");
const signinData = require("../Data/signindata");
const Profilepage = require("../pages/Profilepage");

describe ("Update admin",function(){
    it("Admin",async()=>{

        await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.Username);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.Password);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);

        await Profilepage.clickOnProfile();
        await browser.pause(3000);
        await Profilepage.updateFirstname(signinData.updateadminfirstname);
        await browser.pause(3000);
        await Profilepage.enterFirstname(signinData.replacefirstname);
        await browser.pause(3000);
        await Profilepage.updatemiddlename(signinData.updateadminmiddlename);
        await browser.pause(3000);
        await Profilepage.enterMiddlename(signinData.replaceadminmiddlename);
        await browser.pause(3000);
        await Profilepage.updatelastname(signinData.updateadminlastname);
        await browser.pause(3000);
        await Profilepage.enterLastname(signinData.replaceadminlastname);
        await browser.pause(3000);
        await Profilepage.enterGender(signinData.admingender);
        await browser.pause(3000);
        await Profilepage.updatephone(signinData.updateadminphone );
        await browser.pause(3000);
        await Profilepage.enterPhonenumber(signinData.replaceadminphone);
        await browser.pause(3000);

    
        

    })
})