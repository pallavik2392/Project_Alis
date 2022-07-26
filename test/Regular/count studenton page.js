const CountDemo = require("../../pages/countstudent");

const signinData = require("../../Data/signindata");
const signinpage = require("../../pages/signinpage");
const Studentpage = require("../../pages/Studentpage");
const console = require("console");
var expect = require('chai').expect



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

        //var studentlist =[];
        studentlist =await  CountDemo.getstudents();
        await browser.pause(8000);
         //console.log("line number 30",studentlist);

        console.log("first element",studentlist[0]);
        /*console.log("first element",studentlist[1]);
        console.log("first element",studentlist[2]);
        console.log("first element",studentlist[3]);
        console.log("first element",studentlist[4]);
        console.log("first element",studentlist[5]);*/

       // console.log("line number 30",studentlist);

        //const p = Promise.resolve(studentlist);
// immediately logging the value of p
/*console.log("FIRSTLOGGGGG",p);*/

       
          
    console.log("Result is here",studentlist);


    /*      Promise.resolve(studentlist).
  then((results) => results.forEach((result) => console.log("result is:",result) ));

  //console.log("Result is:",result)*/
  



         
       // console.log("list isssss:",str);
        /*console.log("list is:",studentlist[1]);
        console.log("list is:",studentlist[2]);
        console.log("list is:",studentlist[3]);
*/
      /*  expect(studentlist[0]).to.equal([
            '20225120001',
            
        ])*/

       // for reading cards
     // let parentdiv=await $$("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]");
     /* parentdiv.forEach(element =>{
          element.getText();
      })*/

    /*  //for finding length of cards
      let totalstudents=await $$("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 jss32 cursor-pointer MuiCard-root css-1n4rl4z']")

      console.log("Count of student",totalstudents.length);
      await browser.pause(3000);
*/
    })
})