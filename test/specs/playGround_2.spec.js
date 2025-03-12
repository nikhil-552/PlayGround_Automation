import landingPage from '../pageObjects/landingPage.js';
import cartPage from '../pageObjects/cartPage.js';
import data from '../testData/playGround.json' assert { type: 'json' };
import categoryPage from '../pageObjects/categoryPage.js';
import contactPage from '../pageObjects/contactPage.js';

describe('TC011 - Verify if the user can reset the cart', () => {
	it(`Land to "${data.url}"`, async () => {
		await landingPage.loadUrl(data.url);
		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
	});

	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
		await landingPage.login();
		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
	});

	it('Verify the user can add 3rd product from the "New Arrivals" courosal to the cart', async () => {
		await landingPage.addToCart();
		await expect(landingPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
	})

	it('Verify user can navigate to cart page by clicking cart icon', async () => {
		await cartPage.goToCartPage();
		await expect(cartPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
	})

	it('Verify user can reset the cart by clicking on reset cart button', async () => {
		await cartPage.resetCart();
		await expect(cartPage.$header("Your Cart feels lonely.")).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
	})

	afterAll(async () => {
		await landingPage.browserClose();
	})

})

describe('TC013 - Verify the Proceed to checkout button', () => {
	it(`Land to "${data.url}"`, async () => {
		await landingPage.loadUrl(data.url);
		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
	});

	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
		await landingPage.login();
		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
	});

	it('Verify the user can add 3rd product from the "New Arrivals" courosal to the cart', async () => {
		await landingPage.addToCart();
		await expect(landingPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
	})

	it(`Verify user can navigate to cart page by clicking cart icon`, async () => {
		await cartPage.goToCartPage();
		await expect(cartPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
	})

	it('Verify user can click on proceed to checkout button', async () => {
		await cartPage.proceedToCheckout();
		await expect(cartPage.$header("Payment Gateway")).withContext('Expect checkout homeHeader should displayed').toBeDisplayed();

	})

})

describe('TC014 - Verify the Contact tab', () => {
	it(`Land to "${data.url}"`, async () => {
		await landingPage.loadUrl(data.url);
		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
	});

	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
		await landingPage.login();
		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
	});

	it('Navigate to contact tab', async () => {
		await landingPage.clickNavItem(`Contact`);
		await expect(landingPage.$header("Contact")).withContext('Expect contact homeHeader should displayed').toBeDisplayed();
	})

	it('Fill the forms', async () => {
		await contactPage.fillContactForm();
		expect(contactPage.$thankYouMessage()).withContext('Expect "Thank you" message should displayed').toBeDisplayed();

	})
})

describe('TC016 - Verify the subtotal amount is equal to sum of each product price', () => {
	it(`Land to "${data.url}"`, async () => {
		await landingPage.loadUrl(data.url);
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

	it('Select first product from Laptop category', async () => {
		await categoryPage.addProductToCart();
		await expect(categoryPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
	})

	it('Click on  "Shop by Category" menu and select a category "Mobiles"', async () => {
		await landingPage.shopByCategory('Mobiles');
		await expect(landingPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
	})

	it('Select first product from Mobile category', async () => {
		await categoryPage.addProductToCart();
		await expect(categoryPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
	})

	it('Verify user should navigate to "Cart page" clicking "Cart" icon', async () => {
		await cartPage.goToCartPage();
		await expect(cartPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
	})

	it(`Verify the Subtotal amount is equal to sum of each product price`, async () => {
		let subtotal = await cartPage.totalProductPrice();
		expect(subtotal).withContext(`Expect subtotal amount is equal to sum of each product price`).toBe(true);
	})



	afterAll(async () => {
		await landingPage.browserClose();
	})

})

describe('TC017 - Verify the continue shopping button after resetting the cart', () => {
	it(`Land to "${data.url}"`, async () => {
		await landingPage.loadUrl(data.url);
		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
	});

	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
		await landingPage.login();
		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
	});

	it('Click on  "Shop by Category" menu and select a category "Laptops"', async () => {
		await landingPage.shopByCategory('Laptops');
		await expect(landingPage.$cartHeader()).withContext('Expect cart home header should displayed').toBeDisplayed();
	})

	it('Select first product from Laptop category', async () => {
		await categoryPage.addProductToCart();
		await expect(categoryPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
	})

	it('Verify user should navigate to "Cart page" clicking "Cart" icon', async () => {
		await cartPage.goToCartPage();
		await expect(cartPage.$cartHeader()).withContext('Expect cart home header should displayed').toBeDisplayed();
	})

	it('Verify user can reset the cart by clicking on reset cart button', async () => {
		await cartPage.resetCart();
		await expect(cartPage.$header("Your Cart feels lonely.")).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
	})

	it('Click on the "Continue Shopping" button', async () => {
		await cartPage.continueShopping();
		await expect(landingPage.$header("Products")).withContext('Expect user navigate to product page').toBeDisplayed();
	})

	afterAll(async() =>{
		await landingPage.browserClose()
	})
})

describe('TC018 - Verify the continue shopping button in about tab',()=> {
	it(`Land to "${data.url}"`, async () => {
		await landingPage.loadUrl(data.url);
		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
	});

	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
		await landingPage.login();
		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
	});

	it('Verify that user can navigate to "About Page" by clicking about button from navigate',async () => {
		await landingPage.$navItem("About");
		await expect(landingPage.$header("About")).withContext('Expect header should display successfully').toBeDisplayed();
	})

	afterAll(async() =>{
		await landingPage.browserClose()
	})
})

describe('TC019 - Verify if the user is able to add the product to the wishlist',() =>{
	it(`Land to "${data.url}"`, async () => {
		await landingPage.loadUrl(data.url);
		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
	});

	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
		await landingPage.login();
		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
	});

	it('Click on  "Shop by Category" menu and select a category "Mobiles"', async () => {
			await landingPage.shopByCategory('Mobiles');
			await expect(landingPage.$cartHeader()).withContext('Expect cart home header should displayed').toBeDisplayed();
		})
	it('Select first product from "Mobile" category and add to wishlist', async () => {
			await categoryPage.productWishlist();
			await expect(categoryPage.$wishListAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
		})
	
	afterAll(async() =>{
		await landingPage.browserClose()
	})
})

