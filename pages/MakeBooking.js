const { expect } = require("@playwright/test")
const booking = (page)=> ({


    async homePage(){
        await page.goto('https://automationintesting.online/');
    },

async type_fullName(name){
    await page.locator('[id="name"]').fill(name)
},


async type_email(email){
    await page.locator('[id="email"]').fill(email)
},


async type_phoneNumber(phoneNumber){
    await page.locator('[id="phone"]').fill(phoneNumber)
},


async type_Subject(subject){
    await page.locator('[id="subject"]').fill(subject)
},


async type_Description(description){
    await page.locator('[id="description"]').fill(description)
},

async selectButton(){
    await page.getByRole('button', { name: 'Submit' }).click()
},

async message(name){
    await expect(page.locator('[class="col-sm-5"]'). nth(0).locator('h2')).toContainText( `Thanks for getting in touch ${name}!` )
}



})
module.exports = booking