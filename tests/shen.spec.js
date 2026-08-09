const {test, expect}=require('@playwright/test');
test('First test',async({page})=>
{
    await page.goto("https://www.flipkart.com/");
})
test.only('Checking Title',async({page})=>
{
    await page.goto("https://www.amazon.in/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
})