// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const placeBooking = require('../pages/MakeBooking')

test('Room Reservation', {tag:'@success'}, async ({ page }) => {
  const PlaceBooking = placeBooking(page)

  const randomName = faker.person.fullName();
  const randomEmail = faker.internet.email(); 
  const randomPhone = faker.phone.number({ style: 'national' });
  //const randomPhone = faker.phone.number({ style: 'international' });
  const randomSubject = `Room ${faker.number.int({ min: 20, max: 999 })}`;
  const randomDescription = faker.lorem.sentence(); 
  await page.goto('https://automationintesting.online/');

  await PlaceBooking.type_fullName(randomName)
  await PlaceBooking.type_email(randomEmail)
  await PlaceBooking.type_phoneNumber(randomPhone)
  await PlaceBooking.type_Subject(randomSubject)
  await PlaceBooking.type_Description(randomDescription)
  await PlaceBooking.selectButton()
  await PlaceBooking.message(randomName)
  //await expect(page.locator('[class="col-sm-5"]'). nth(0).locator('h2')).toContainText( `Thanks for getting in touch ${randomName}!` )
  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});


