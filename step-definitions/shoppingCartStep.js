const { Given,When,Then} = require("@cucumber/cucumber")
const {ShoppingCartFunctions} = require ('../CommonFunctions/shopping-methods')

const shoppingCartFunctions = new ShoppingCartFunctions();

Given('I add four different products to my wish list', async function(){
    await page.goto("https://testscriptdemo.com");
    await shoppingCartFunctions.clickOnShopTitle();
    await shoppingCartFunctions.clickOnItemsToAddInWishlist();
})

When('I view my wishlist table', async function(){
    await shoppingCartFunctions.goToWishlist();
})

Then('I find total four selected items in my Wishlist', async function(){
    await shoppingCartFunctions.verifyProductsAddedInWishlist();
})

When('I search for lowest price product', async function(){
    await shoppingCartFunctions.verifyLowestPriceProduct();
    
})

Then('I am able to add the lowest price item to my cart', async function(){
    await shoppingCartFunctions.selectMinimumItem();
})

Then('I am able to verify the item in my cart', async function(){
    await shoppingCartFunctions.verifyAddedProductexist();
})