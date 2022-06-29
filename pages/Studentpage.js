//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { $ } = require("protractor");
const Page = require("../test/pageobjects/page");

class Studentpage extends Page{
    get studentmenu(){return $("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/a[2]/div[1]/i[1]")}
    get searchfunction(){return $("//input[@placeholder='Search']")}
    get particularstudent(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]")}
    get supporttab(){return $("//a[normalize-space()='Support']")}
    get paymenttab(){return $("//a[contains(text(),'Payment')]")}
    get scholarshiptab(){return $("//h4[contains(text(),'SCHOLARSHIP')]")}
    get addscholarship(){return $("//i[@class='flaticon-add']")}
    get scholarshipcourse(){return $("//input[@id='course']")}
    get dateearned(){return $("//input[@placeholder='Date Earned']")}
    get benefitsEarned(){return $("//input[@placeholder='Benefits Earned']")}
    get scholarshipsave(){return $("//button[@type='submit']")}


    async clickOnstudentMenu(){
        this.studentmenu.click();
    }
    async searchstudent(Text){
        this.searchfunction.setValue(Text);
    }
    async clickOnparticularstudent(){
        this.particularstudent.click();
    }
    async clickOnsupport(){
        this.supporttab.click();
    }
    async clickOnpayment(){
        this.paymenttab.click();
    }
    async clickOnscholarship(){
        this.scholarshiptab.click();
    }
    async clickOnAddscholarshipicon(){
        this.addscholarship.click();
    }
    async addCourseforscholarship(text){
        this.scholarshipcourse.setValue(text);
        const coursename=await $("//li[@id='course-option-0']");
        await coursename.click();
    }
    async addDateforscholarship(text){
        this.dateearned.click();
        const edit=await $("//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[1]");
        await edit.click();
        const date=await $("//input[@placeholder='dd/mm/yyyy']");
        await date.setValue(text);
        const ok=await $("//body/div[2]/div[3]/div[1]/div[2]/button[2]");
        await ok.click();
    }
    async addBenefitsforscholarship(text){
        this.benefitsEarned.setValue(text);
    }
    async clickOnscholarshipsave(){
        this.scholarshipsave.click();
    }


}
module.exports = new Studentpage();