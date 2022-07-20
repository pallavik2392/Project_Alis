const console = require("console");
const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");
var assert = require('chai').assert;
var expect = require('chai').expect



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
        var p=[];
       p= Promise.resolve(allwindow).then((values) => {
         var p=values;
         console.log("P is here", p);
        // await  expect(window1).not.to.equal(window2);

         /*if(window1===window2){
             console.log("tet case fail");
           
 
        }else{
            console.log("Test case pass ");
        }*/

        

          });
          await browser.pause(6000);


          console.log("p out of bracket:",p);
          
         //console.log("window 2 is:",this.window2);

        //  expect(this.window1).not.to.equal(this.window2);

         // expect(values[0]).not.to.equal(values[1]);

        /*  if(window1===window2){
            var a=10;
         a.should.be.an('object');
 
        }else{
            console.log("Test case pass ");
        }*/
       /* const p = Promise.resolve([allwindow]);
p.then((v) => {
  console.log(v[0]); // 1
});*/

        //console.log("allwindow ",result);
       // console.log(allwindow.1);
        //console.log("window2 is ", window2);

       

        
      

        
    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyrejectbuttonckickableforeducation.png")
    })
})