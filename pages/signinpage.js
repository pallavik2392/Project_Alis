//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
const Page = require("../test/pageobjects/page");

class SigninPage extends Page{

    get username(){return  $("input[id='username']")}
    get password(){return  $("input[id='password']")}
    get signinBtn(){return  $("button[type='submit']")}
    get organizationshortcode(){return $("//input[@placeholder='Organization Short Code']")}
    get organization(){return $("//body/div[@id='root']/div[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[1]/span[1]/i[1]")}


    async enterUsername(text){
         this.username.setValue(text);
     }

     async enterPassword(text){
         this.password.setValue(text);
     }

     async clearUsername(){
         this.username.click();
         //this.username.waitForDisplayed();
         this.username.clearElement('sa@mailinator.com');
     }
     

     async clickOnSubmit(){
        this.signinBtn.click();
     }
     async enterOrganizationcode(text){
         this.organizationshortcode.setValue(text);
     }
     async clickOnOrganization(){
         this.organization.click();
     }
     async Signinisclickable(){
        await expect(this.signinBtn).toBeClickable();
    }
    async verifyInvitecode(text1,text2){
        const email=await $("//span[contains(text(),'"+text1+"')]/parent::div/parent::td");

        await email.click();
        await browser.pause(3000);
        const time = await $("//span[contains(text(),'"+text2+"')]");
        
        await browser.pause(3000);
        await expect(time).toBeExisting();

    }

}
module.exports = new SigninPage();