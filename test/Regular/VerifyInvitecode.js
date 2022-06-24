describe("Verify email for Invitecode",function(){
    it("Invite code",async() =>{

        await browser.url("https://www.mailinator.com/");
        await browser.pause(3000);

        const search=await $("//input[@id='search']");
        await search.setValue('Pallavi');
        await browser.pause(6000);

        const Go=await $("//button[contains(text(),'GO')]");
        await Go.click();
        await browser.pause(6000);


        const email=await $("//td[contains(text(),'Invitation to ALIS from K111')]");
        await email.click();
        await browser.pause(6000);
    })
})