const Page = require("../test/pageobjects/page");

class SigninPage extends Page{

    get username(){return  $("input[id='username']")}
    get password(){return  $("input[id='password']")}
    get signinBtn(){return  $("button[type='submit']")}

    async enterUsername(text){
         this.username.setValue(text);
     }

     async enterPassword(text){
         this.password.setValue(text);
     }

     async clickOnSubmit(){
        this.signinBtn.click();
     }

}
module.exports = new SigninPage();