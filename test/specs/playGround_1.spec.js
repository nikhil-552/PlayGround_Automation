import landingPage from '../pageObjects/landingPage.js';
import shopPage from '../pageObjects/shopPage.js';
import componentPage from '../pageObjects/componentPage.js';
import cartPage from '../pageObjects/cartPage.js';
import testData from '../testData/playGround.json' assert { type: 'json' };
import categoryPage from '../pageObjects/categoryPage.js';
import contactPage from '../pageObjects/contactPage.js';

describe('TC001 - Verify user is able to filter product by brand', () => {
    it(`Land to "${testData.url}"`, async () => {
        await landingPage.loadUrl(testData.url);
        await expect(landingPage.$homeHeader()).withContext('Expect user should land to the landing page').toBeDisplayed();
    });

    it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
        await landingPage.login();
        await expect(landingPage.$profileFloat()).withContext('Expect user should login successfully').toBeDisplayed();
    });

    it('Verify user navigate to "Shop" page using menu option', async () => {
        await landingPage.clickNavItem('Shop');
        await expect(landingPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
    });

    it('Verify refine the listing of product by filtering the brands by selecting the "Samsung" brand name checkbox in "Shop by Brand" shown on the left side of the page', async () => {
        let productNames = await shopPage.filterProducts('Brand', 'Samsung');
        await expect(productNames.every(name => name.includes('Samsung'))).withContext('Some products in the filtered list do not contain "Samsung"').toBeTrue();

    });
    afterAll(async () => {
        await landingPage.browserClose();
    });

});

describe('TC002 -Verify pop up window is displayed', () => {
    it(`Land to to "${testData.url}"`, async () => {
        await landingPage.loadUrl(testData.url);
        await expect(landingPage.$homeHeader()).withContext('Expect user should land to the landing page').toBeDisplayed();
    });

    it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
        await landingPage.login();
        await expect(landingPage.$profileFloat()).withContext('Expect user should login successfully').toBeDisplayed();
    });

    it('Navigate to "Component" page using menu option', async () => {
        await landingPage.clickNavItem('Components');
        await expect(landingPage.$componentHeader()).withContext('Expect homeHeader should displayed successfully').toBeDisplayed();
    });

    it('Click in the "Learn more" link on the "Pop Window Component" tile', async () => {
        await componentPage.clickLearnMore('Pop Window Component');
        await expect(componentPage.$button("Open Pop Window")).withContext('Expect Header should displyaed successfully').toBeDisplayed();
    });

    it("Click on the 'Open Pop Window' button and verify the pop up window is opened", async () => {
        await componentPage.clickPopUpButton();
        await expect(componentPage.$popUpHeader()).withContext('Expect header should displayed successfully').toBeDisplayed();
    });

    it('Click on the "Close" button and ensure the pop window is closed', async () => {
        await componentPage.closePopUp();
        await expect(componentPage.$popUpHeader()).withContext('Popup not closed').not.toBeDisplayed();
    });
    afterAll(async () => {
        await landingPage.browserClose();
    });
});

describe('TC003 - Verify  user is able to shop by category', () => {
    it(`Land to "${testData.url}"`, async () => {
        await landingPage.loadUrl(testData.url);
        await expect(landingPage.$homeHeader()).withContext('Expect user should land to the landing page').toBeDisplayed();
    });

    it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
        await landingPage.login();
        await expect(landingPage.$profileFloat()).withContext('Expect user should login successfully').toBeDisplayed();
    });

    it('Click on  "Shop by Category" menu and select a category "Laptops"', async () => {
        await landingPage.shopByCategory('Laptops');
        await expect(landingPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
    })
    afterAll(async () => {
        await landingPage.browserClose();
    });
});

describe('TC004 - Verify if the user is able to search the product using the search bar', () => {
    it(`Land to "${testData.url}"`, async () => {
        await landingPage.loadUrl(testData.url);
        await expect(landingPage.$homeHeader()).withContext('Expect user should land to the landing page').toBeDisplayed();
    });

    it('Verify Login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
        await landingPage.login();
        await expect(landingPage.$profileFloat()).withContext('Expect user should login successfully').toBeDisplayed();
    });

    it('Verify user can search for a product "Dell XPS 13" in the search bar', async () => {
        await landingPage.searchProduct('Dell XPS 13');
        await expect(landingPage.$productHeader('Dell XPS 13')).withContext('Expect product is displayed.').toBeDisplayed();
    })
    afterAll(async () => {
        await landingPage.browserClose();
    });
});

describe('TC005- Verify if the user is able to  click on "Shop now" option ', () => {
    it(`Land to ""${testData.url}""`, async () => {
        await landingPage.loadUrl(testData.url);
        await expect(landingPage.$homeHeader()).withContext('Expect user should land to the landing page').toBeDisplayed();
    });

    it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
        await landingPage.login();
        await expect(landingPage.$profileFloat()).withContext('Expect user should login successfully').toBeDisplayed();
    });

    it('Click on any "Samsung Galaxy S22 Ultra" from "New arrived" section', async () => {
        await landingPage.selectNewArriveProduct();
        await expect(landingPage.$randomProductHeader()).withContext('Expect product is displayed.').toBeDisplayed();
        await landingPage.clickNavItem(`Home`);
    })
    it('Verify user can click on shop now button for "Laptop Sale"', async () => {
        await landingPage.selectCategoryShopNow('Laptops');
        await expect(landingPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
    })
    afterAll(async () => {
        await landingPage.browserClose();
    });
})

describe('TC006-Verify if the user is able to click on a product to buy', () => {
    it(`Land to "${testData.url}"`, async () => {
        await landingPage.loadUrl(testData.url);
        await expect(landingPage.$homeHeader()).withContext('Expect user should land to the landing page').toBeDisplayed();
    });

    it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
        await landingPage.login();
        await expect(landingPage.$profileFloat()).withContext('Expect user should login successfully').toBeDisplayed();
    });

    it('Click on any "First item" from "New arrived" section', async () => {
        await landingPage.selectNewArriveProduct();
        await expect(landingPage.$randomProductHeader()).withContext('Expect product is displayed.').toBeDisplayed();
    })
    afterAll(async () => {
        await landingPage.browserClose();
    });
})

describe('TC007 - Verify if the user is able to add the product to the cart', () => {
    it(`Land to "${testData.url}"`, async () => {
        await landingPage.loadUrl(testData.url);
        await expect(landingPage.$homeHeader()).withContext('Expect user should land to the landing page').toBeDisplayed();
    });

    it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
        await landingPage.login();
        await expect(landingPage.$profileFloat()).withContext('Expect user should login successfully').toBeDisplayed();
    });

    it('Verify the user can Add 3rd product from the "New Arrivals" courosal to the cart', async () => {
        await landingPage.addToCart();
        await expect(landingPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
    })
    afterAll(async () => {
        await landingPage.browserClose();
    });
})

describe('TC008 - Verify if the user can add multiple quantity of the same product to the cart', () => {
    it(`Land to "${testData.url}"`, async () => {
        await landingPage.loadUrl(testData.url);
        await expect(landingPage.$homeHeader()).withContext('Expect user should land to the landing page').toBeDisplayed();
    });

    it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
        await landingPage.login();
        await expect(landingPage.$profileFloat()).withContext('Expect user should login successfully').toBeDisplayed();
    });

    it('Verify the user can add 3rd product from the "New Arrivals" courosal to the cart', async () => {
        await landingPage.addToCart();
        await expect(landingPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
    })

    it('Verify user should navigate to "Cart page" clicking "Cart" icon', async () => {
        await cartPage.goToCartPage();
        await expect(cartPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
    })

    it('Verify user can increase the quantity by clicking "+" button', async () => {
        let changeQuantity = await cartPage.changeQuantity('+');
        expect(changeQuantity).withContext(' Expect product count should be incremented by one').toBe(true);
    })

    afterAll(async () => {
        await landingPage.browserClose();
    });
})

describe('TC009 - Verify if the user can reduce quantity of the same product from the cart', () => {
    it(`Land to "${testData.url}"`, async () => {
        await landingPage.loadUrl(testData.url);
        await expect(landingPage.$homeHeader()).withContext('Expect user should land to the landing page').toBeDisplayed();
    });

    it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
        await landingPage.login();
        await expect(landingPage.$profileFloat()).withContext('Expect user should login successfully').toBeDisplayed();
    });

    it('Verify the user can add 3rd product from the "New Arrivals" courosal to the cart', async () => {
        await landingPage.addToCart();
        await expect(landingPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
    })

    it('Verify user should navigate to cart page clicking cart icon', async () => {
        await cartPage.goToCartPage();
        await expect(cartPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
    })
    it('Verify user can increase the quantity by clicking "+" button', async () => {
        let changeQuantity = await cartPage.changeQuantity(`+`);
        expect(changeQuantity).withContext(' Expect product count should be incremented by one').toBe(true);
    })

    it('verify user can reduce the quantity by clicking "-" button', async () => {
        let changeQuantity = await cartPage.changeQuantity(`-`);
        expect(changeQuantity).withContext(' Expect product count should be decremented by one').toBe(true);
    })

    afterAll(async () => {
        await landingPage.browserClose();
    })
})

describe('TC0010 - Verify if the user can add multiple product to the cart', () => {
    it(`Land to ""${testData.url}""`, async () => {
        await landingPage.loadUrl(testData.url);
        await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
    });

    it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
        await landingPage.login();
        await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
    });

    it('Click on  "Shop by Category" menu and select a category "Laptops"', async () => {
        await landingPage.shopByCategory('Laptops');
        await expect(landingPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
    })

    it('Select first product from "Laptop" category', async () => {
        await categoryPage.addProductToCart();
        await expect(categoryPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
    })

    it('Click on  "Shop by Category" menu and select a category "Mobiles"', async () => {
        await landingPage.shopByCategory('Mobiles');
        await expect(landingPage.$cartHeader()).withContext('Expect cart home header should displayed').toBeDisplayed();
    })

    it('Select first product from "Laptop" category', async () => {
        await categoryPage.addProductToCart();
        await expect(categoryPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
    })

    afterAll(async () => {
        await landingPage.browserClose();
    })
})

