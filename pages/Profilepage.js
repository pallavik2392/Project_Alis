//const { $ } = require("protractor");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
const Page = require("../test/pageobjects/page");

class Profilepage extends Page{
    get profileicon(){return $("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback css-13y7ul3'])[1]")}
    get firstname(){return $("//input[@id='firstName']")}
    get midlename(){return $("//input[@id='middleName']")}
    get lastname(){return $("//input[@id='lastName']")}
    get gender1(){return $("//input[@id='gender']")}
    get DOB(){return $("//input[@placeholder='Date of Birth']")}
    get phone(){return $("//input[@id='phone']")}

    async  enterFirstname(text){
        this.firstname.setValue(text);
    }
    async enterMiddlename(text){
        this.midlename.setValue(text);
    }
    async enterLastname(text){
        this.lastname.setValue(text);
    }
    async enterGender(Text){
        this.gender1.setValue(Text);
       // const gender1=await $("//li[@id='gender-option-0']");
        //await gender1.click();
       

    }
    async enterPhonenumber(number){
        this.phone.setValue(number);
    }
    async updateFirstname(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
    }
    async updatemiddlename(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
    }
    async updatelastname(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
    }
    async updatephone(Text){
        const name=await $("//p[normalize-space()='"+Text+"']");
        await name.doubleClick();
        await browser.keys('Backspace');
    }
    
    async clickOnProfile(){
        this.profileicon.click();
    }
}
module.exports=new Profilepage();