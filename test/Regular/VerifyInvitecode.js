//const { default: $ } = require("webdriverio/build/commands/browser/$");

//const { default: $ } = require("webdriverio/build/commands/browser/$");

//const { default: $ } = require("webdriverio/build/commands/browser/$");

describe("Verify email for Invitecode",function(){
    it("Invite code",async() =>{

        await browser.url("https://www.mailinator.com/");
        await browser.pause(3000);

        const search=await $("//input[@id='search']");
        await search.setValue('Pallavi');
        await browser.pause(6000);

        const Go=await $("//button[contains(text(),'GO')]");
        await Go.click();
        await browser.pause(6000);
    
        /*const username=await $("//input[@type='email']");
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
        await browser.pause(24000)
       */ 
        const email=await $("//td[normalize-space()='Invitation to ALIS from K111']");
        await email.doubleClick();
        await browser.pause(7000);

       /* const date=await $("//span[normalize-space()='Jun 22']");
        if(email && date){
                    await email.click();

        }
*/
    })
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/VerifyInvitecode.png")
    })
})