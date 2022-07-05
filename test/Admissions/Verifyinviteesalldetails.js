const signinData = require("../../Data/signindata");
const Leadpage1 = require("../../pages/Leadpage1");
const signinpage = require("../../pages/signinpage");

describe("verify  invitee's all details",function(){
    this.retries(1)

    it("Verify invitee's details",async()=> {
        await browser.url("https://dev-alis.viasimplex.in/");
        console.log(browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(3000);
        await signinpage.enterUsername(signinData.usercred);
        await browser.pause(3000);
        await signinpage.enterPassword(signinData.passcred);
        await browser.pause(3000);

        await signinpage.clickOnSubmit();
        await browser.pause(5000);
        

        await Leadpage1.clickOninviteleadbutton();
        await browser.pause(3000);
       
        await Leadpage1.clickOneditlead();
        await browser.pause(3000);
         
        const firstname=await $("//p[@class='MuiTypography-root MuiTypography-body1 jss42 css-1h7t25g']").getText();
        console.log("first name of lead",firstname);
        const leademail=await $("//span[contains(text(),'Email *')]/following-sibling::p").getText();
        console.log("lead email is",leademail);
        const leadphone=await $("//span[contains(text(),'Phone *')]/following-sibling::p").getText();
        console.log("lead phone is",leadphone);
        const leadDateofbirth=await $("//span[contains(text(),'Date of Birth *')]/following-sibling::p").getText();
        console.log("lead DOB is",leadDateofbirth);
        const leadconselor=await $("//span[contains(text(),'Counselor *')]/following-sibling::p").getText();
        console.log("lead conselor is",leadconselor);
        const leadcourse=await $("//span[contains(text(),'Course *')]/following-sibling::p").getText();
        console.log("lead course is",leadcourse);
        const leadacademylocation=await $("//span[contains(text(),'Academy Location *')]/following-sibling::p").getText();
        console.log("lead academy location  is",leadacademylocation);
        const leadcountry=await $("//span[contains(text(),'Country *')]/following-sibling::p").getText();
        console.log("lead country  is",leadcountry);
        const leadpostalcode=await $("//span[contains(text(),'Postal Code *')]/following-sibling::p").getText();
        console.log("lead postal code is",leadpostalcode);
        const leadflatnumber=await $("//span[contains(text(),'Flat/House Number *')]/following-sibling::p").getText();
        console.log("lead flat number is",leadflatnumber);
        const leadareacolony=await $("//span[contains(text(),'Street, Colony, Area *')]/following-sibling::p").getText();
        console.log("lead area/colony is ",leadareacolony);
        const leadcity=await $("//span[contains(text(),'Town/City *')]/following-sibling::p").getText();
        console.log("lead city is",leadcity);
       // const leadgender=await $("//span[contains(text(),'Gender *')]/following-sibling::p").getText();
        //console.log("lead gender is",leadgender);

        await Leadpage1.clickOninviteetab();
        await browser.pause(3000);
        const invitee=await $("//h5[contains(text(),'"+firstname+"')]");
        await invitee.click();
        await browser.pause(3000);
       
        const inviteefirstname=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[1]/div[2]/child::p");
        await expect(inviteefirstname).toHaveTextContaining(firstname);
        await browser.pause(3000);

        const inviteeemail=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[5]/div[2]/child::p");
        await expect(inviteeemail).toHaveTextContaining(leademail);
        await browser.pause(3000);

        const inviteephone=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[4]/div[2]/child::p");
        await expect(inviteephone).toHaveTextContaining(leadphone);
        await browser.pause(3000);

        //const inviteeDOB=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[8]/div[2]/child::p");
       // await expect(inviteeDOB).toHaveTextContaining(leadDateofbirth);
       // await browser.pause(3000);

        //const inviteegender=await $("//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[7]/div[2]/child::p");
        //await expect(inviteegender).toHaveTextContaining(leadgender);
        //await browser.pause(3000);

        const inviteepostalcode=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[4]/form[1]/div[1]/div[2]/div[2]/div[2]/child::p");
        await expect(inviteepostalcode).toHaveTextContaining(leadpostalcode);
        await browser.pause(3000);

        const inviteecity=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[4]/form[1]/div[1]/div[2]/div[4]/div[2]/child::p");
        await expect(inviteecity).toHaveTextContaining(leadcity);
        await browser.pause(3000);

        const inviteeflatnumber=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[4]/form[1]/div[1]/div[2]/div[5]/div[2]/child::p");
        await expect(inviteeflatnumber).toHaveTextContaining(leadflatnumber);
        await browser.pause(3000);

        const inviteecolony=await $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[4]/form[1]/div[1]/div[2]/div[6]/div[2]/child::p");
        await expect(inviteecolony).toHaveTextContaining(leadareacolony);
        await browser.pause(3000);



    })
    // screenshot issue resolved by using link ==>> https://youtu.be/ouyvnPo9IjQ
   
    after(async()=>{
        await browser.saveScreenshot("./ScreenshotsforAlis/Verifyinviteesalldetails.png")
    })
})