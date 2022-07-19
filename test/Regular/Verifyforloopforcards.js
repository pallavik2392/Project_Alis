
const console = require("console");
const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");


describe("Student page elements", function(){

    it("elements count", async() => {

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
        
        await Studentpage.clickOnstudentMenu();
        await browser.pause(3000);

        var totalstudents=await $$("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 jss32 cursor-pointer MuiCard-root css-1n4rl4z']");
      for(var i=0; i<totalstudents.length ; i++){
          console.log("Inside for loop");      
          //console.log(totalstudents[i]);
         var  student =await totalstudents[i].getText();
          console.log("student 1 is: ",student[i]);
      }

    /*  //reading text from cards
      var textFRomcards = [];
      var totalstudents=await $$("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 jss32 cursor-pointer MuiCard-root css-1n4rl4z']").map(function(element){
      console.log("text of names:",+element.getText());
      textFRomcards.push(element.getText());
      })
      console.log("All cards text :"+textFRomcards);*/


      //console.log("All cards text :"+textFRomcards);
      //console.log("Count of student",totalstudents.length);
     /* var totalstudents=await $$("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 jss32 cursor-pointer MuiCard-root css-1n4rl4z']");
      for(var i=0; i<totalstudents.length ; i++){
          console.log("Inside for loop");
          //const name=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/child::h5").getText();
          console.log(totalstudents[i]);

      }*/

     /* //for reading id's
      var ID=await $$("//h6[@class='jss40 MuiTypography-root MuiTypography-h6 css-1ri25d']");
      for(var i=0; i<ID.length ; i++){
        console.log("Inside for loop to read ID");
        //const name=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/child::h5").getText();
        console.log("ID of student is:",ID[1].getText());
        await browser.pause(7000);

    }*/
   /* var ID=await $$("//h6[@class='jss40 MuiTypography-root MuiTypography-h6 css-1ri25d']");
        ID.forEach(element =>{

             element.getText();
        })*/
    })

})