const console = require("console");
const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");
var assert = require('chai').assert;


describe("verify new window opens after clicking on view button of  ",function(){
    //this.retries(2)
    

    it("Verify new window opens or not",async()=> {
        await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.usercred);
        await browser.pause(1000);
        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(1000);
        await signinpage.clickOnSubmit();
        await browser.pause(5000);
        
        await Leadpage1.clickOnApplicationtab();
        await browser.pause(3000);
        await Leadpage1.clickOnapplicationsviewbutton();
        await browser.pause(3000);
        var parentwindow=browser.getWindowHandle();
        await browser.pause(6000);
        console.log("parent window is ", parentwindow);

        await Leadpage1.clickOn1stdocumentviewbutton();
        await browser.pause(6000);

        var allwindow=browser.getWindowHandles();
        await browser.pause(6000);
       /* const p = Promise.resolve([allwindow]);
p.then((v) => {
  console.log(v[0]); // 1
});*/

        //console.log("allwindow ",result);
       // console.log(allwindow.1);
        //console.log("window2 is ", window2);

       

        
        var newwindow;
        for(var i=0; i<2;i++){
            /*if(allwindow[i]!= parentwindow){
       console.log("inside if loop")
                newwindow=allwindow[i];
            }*/
            console.log(allwindow[i]);
        }
       // console.log("new window is:",newwindow);

        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyrejectbuttonckickableforeducation.png")
    })
})