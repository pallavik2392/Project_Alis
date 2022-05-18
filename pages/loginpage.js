const { default: $ } = require("webdriverio/build/commands/browser/$");

class LoginPage{

    get username(){return $('username')}
    get password(){return $('password')}
    get signinBtn(){return $('button')}

    enterUsername(text){
       // this.username.waitForDisplayed();
        this.username.setValue(text);
    }

    enterPassword(text){
       // this.password.waitForDisplayed();
        this.password.setValue(text);
    }
 
    clickOnSignin(){
       // this.signinBtn.waitForDisplayed();
        this.signinBtn.click();
    }

}
module.exports = new LoginPage();