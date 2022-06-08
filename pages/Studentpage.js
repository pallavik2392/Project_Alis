//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
const Page = require("../test/pageobjects/page");

class Studentpage extends Page{
    get studentmenu(){return $("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/a[2]/div[1]/i[1]")}
    get searchfunction(){return $("//input[@placeholder='Search']")}
    get particularstudent(){return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]")}
    get supporttab(){return $("//a[normalize-space()='Support']")}

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
}
module.exports = new Studentpage();