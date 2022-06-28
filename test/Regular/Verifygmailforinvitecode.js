//const { default: $ } = require("webdriverio/build/commands/browser/$");

const signindata = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");

describe("Verify email for Invitecode",function(){
    it("Invite code",async() =>{

        await browser.url("https://mail.google.com/");
        await browser.pause(3000);

        
    
        const username=await $("//input[@type='email']");
        await username.setValue('pallavi@wemotiveforge.com');
        await browser.pause(3000);

        const Next=await $("//span[normalize-space()='Next']");
        await Next.click();
        await browser.pause(3000);

        const password=await $("//input[@type='password']");
        await password.setValue('jaisadguru');
        await browser.pause(3000);

        const Next1=await $("//span[normalize-space()='Next']");
        await Next1.click();
        await browser.pause(12000);

        await signinpage.verifyInvitecode(signindata.Emailsubjectline,signindata.timeORdate);
        await browser.pause(3000);
  

    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/VerifygmailforInvitecode.png")
    })
})