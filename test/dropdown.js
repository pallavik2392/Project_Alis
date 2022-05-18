//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: throttle } = require("webdriverio/build/commands/browser/throttle");
//const { browser } = require("protractor");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
//const { default: $ } = require("webdriverio/build/commands/browser/$");
const signinData = require("../Data/signindata");
const signinpage = require("../pages/signinpage");


describe ("dropdown", function(){
    it("test", async () => {
        await browser.url("https://staging-alis.wemotive.in/");
        await browser.maximizeWindow();
            console.log('browser.getUrl()');
        await browser.pause(5000);
        //let str= await browser.executeScript("return document.title")
        //console.log(str);
        await signinpage.enterUsername(signinData.usercred);
        await browser.pause(5000);

        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(5000);

        await signinpage.clickOnSubmit();
        console.log('entered into app');
       const NewleadBtn = await $("//button[normalize-space()='New Lead']");
       await NewleadBtn.click();
       await browser.pause(10000);
        console.log('clicked on new lead');

       console.log("will click on  'gender '");
       const gender = await $("//input[@id='gender']/parent::div");
       let  gender1= await gender.click();
      //const gn= gender1((await $("//li[@id='gender-option-1']")).click());
       console.log("clicked on gender");
       //await browser.pause(2000);

       //const matches = document.querySelectorAll("#gender");
      //let  list= matches.getText();
      // let genderName=$$("//input[@id='gender']/parent::div");
             // await browser.pause(3000);

       //console.log("conut the genders");
       //let genderlen;
        //await genderlen===genderName.length;
       //console.log("gender length is:"+genderlen);
        //for(var i=0;i<genderName.length;i++){
         //  console.log(genderName[i].getText()+"***");
            //if(genderName[i].getText()=="Other")
           // {
           //    genderName[i].doubleClick();
            //   break;
    
           //}
       // }
       //const genderName=await $$("//input[@id='gender']/parent::div/child::input");
            // console.log( await genderName.getText());

         //  let len =genderName.length;
         ////await  console.log("Length of elements   " +len);
         // await console.log("the element is:  " + str);
         //for(var i=0;i<genderName.length;i++){
           ////console.log(genderName[i].getText()+"***")
          // if(genderName[i].getText()=="Other"){
           //    await genderName[i].click()
          // }
        //}

       


    })
})