class ShoppingCartFunctions {

    get shopTitle() {
        return $('//*[@title ="Shop"]')
    }

    get bikini() {
        return $('//a[@data-product-id="22"]')
    }

    get blackTrousers() {
        return $('//a[@data-product-id="15"]')
    }

    get EveningTrousers() {
        return $('//a[@data-product-id="16"]')
    }

    get modern() {
        return $('//a[@data-product-id="18"]')
    }

    get wishList() {
        return $('//*[@class="header-right col-md-3 hidden-xs"]/descendant::div/a[@title="Wishlist"]')
    }
   
    get cart()
    {
        return $('//*[@class="header-right col-md-3 hidden-xs"]/descendant::div/a[@title="Cart"]')
    }
    get lowestItemAddedToCart()
    {
        return $('//*[contains(text(),"Add to cart") and @data-product_id="22"]');
    }

    get addedProductExist()
    {
        return $('//a[contains(text(),"Bikini")]')
    }

async clickOnShopTitle() {
    await (await this.shopTitle).click();
  }

async clickOnItemsToAddInWishlist() {
    await (await this.bikini).click();
    await (await this.blackTrousers).click();
    await (await this.EveningTrousers).click();
    await (await this.modern).click();
  }

  async goToWishlist()
  {
    await (await this.wishList).click();
  }

 async verifyProductsAddedInWishlist(){
    const listOfItems = ["Bikini", "Evening trousers", "Black trousers", "Modern"];
    const productNames = await $$('//*[@data-id="11414"]/tbody//td[@class="product-name"]');
    const list = [];
    for (const product of productNames) {
        const prouductName = await reason.getText();
        await list.push(prouductName);
    }
    for (const item of listOfItems) {
        assert(await list.includes(item), "List of item does not match");
    }
 }

 async verifyLowestPriceProduct()
 {
     const productPrices = await $$('//*[@data-id="11414"]/tbody//td[@class="product-price"]');
     var listOfPrice =[];
     for (const productPrice of productPrices) {
        var price = await reason.getText();
        await listOfPrice.push(price);
        const min = Math.min.apply(Math, listOfPrice);
    }
 }

 async selectMinimumItem()
 {
    await (await this.lowestItemAddedToCart).click();
 }

async clickOnCart()
{
    await (await this.cart).click();
}

async verifyAddedProductexist()
{
    await expect(await addedProductExist).toHaveText("Bikini");
}
}
module.exports = {ShoppingCartFunctions}