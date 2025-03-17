import landingPage from '../pageObjects/landingPage.js';
import cartPage from '../pageObjects/cartPage.js';
import testData from '../testData/playGround.json' assert { type: 'json' };
import categoryPage from '../pageObjects/categoryPage.js';
import contactPage from '../pageObjects/contactPage.js';
import whishListPage from '../pageObjects/whishListPage.js';
import profilePage from '../pageObjects/profilePage.js';
import paymentPage from '../pageObjects/paymentPage.js';
let productName = "";

// describe('TC011 - Verify the user can reset the cart', () => {
// 	it(`Land to "${testData.url}"`, async () => {
// 		await landingPage.loadUrl(testData.url);
// 		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
// 	});

// 	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
// 		await landingPage.login();
// 		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
// 	});

// 	it('Verify the user can add 3rd product from the "New Arrivals" courosal to the cart', async () => {
// 		await landingPage.addToCart();
// 		await expect(landingPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
// 	})

// 	it('Verify user can navigate to cart page by clicking cart icon', async () => {
// 		await cartPage.goToCartPage();
// 		await expect(cartPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
// 	})

// 	it('Verify user can reset the cart by clicking on reset cart button', async () => {
// 		await cartPage.resetCart();
// 		await expect(cartPage.$header("Your Cart feels lonely.")).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
// 	})

// 	afterAll(async () => {
// 		await landingPage.browserClose();
// 	})

// })

// describe('TC013 - Verify the Proceed to checkout button', () => {
// 	it(`Land to "${testData.url}"`, async () => {
// 		await landingPage.loadUrl(testData.url);
// 		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
// 	});

// 	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
// 		await landingPage.login();
// 		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
// 	});

// 	it('Verify the user can add 3rd product from the "New Arrivals" courosal to the cart', async () => {
// 		await landingPage.addToCart();
// 		await expect(landingPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
// 	})

// 	it(`Verify user can navigate to cart page by clicking cart icon`, async () => {
// 		await cartPage.goToCartPage();
// 		await expect(cartPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
// 	})

// 	it('Verify user can click on proceed to checkout button', async () => {
// 		await cartPage.proceedToCheckout();
// 		await expect(cartPage.$header("Payment Gateway")).withContext('Expect checkout homeHeader should displayed').toBeDisplayed();

// 	})

// })

// describe('TC014 - Verify the Contact tab', () => {
// 	it(`Land to "${testData.url}"`, async () => {
// 		await landingPage.loadUrl(testData.url);
// 		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
// 	});

// 	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
// 		await landingPage.login();
// 		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
// 	});

// 	it('Navigate to contact tab', async () => {
// 		await landingPage.clickNavItem(`Contact`);
// 		await expect(landingPage.$header("Contact")).withContext('Expect contact homeHeader should displayed').toBeDisplayed();
// 	})

// 	it('Fill the forms', async () => {
// 		await contactPage.fillContactForm();
// 		expect(contactPage.$thankYouMessage()).withContext('Expect "Thank you" message should displayed').toBeDisplayed();

// 	})
// })

// describe('TC015 - Verify that a user is able to purchase and order_ETE flow', () => {
// 	it(`Land to "${testData.url}"`, async () => {
// 		await landingPage.loadUrl(testData.url);
// 		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
// 	});

// 	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
// 		await landingPage.login();
// 		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
// 	});

// 	it('Verify the user can add 3rd product from the "New Arrivals" courosal to the cart', async () => {
// 		await landingPage.addToCart();
// 		await expect(landingPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
// 	})

// 	it(`Verify user can navigate to cart page by clicking cart icon`, async () => {
// 		await cartPage.goToCartPage();
// 		await expect(cartPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
// 	})

// 	it('Verify user can click on proceed to checkout button', async () => {
// 		await cartPage.proceedToCheckout();
// 		await expect(cartPage.$header("Payment Gateway")).withContext('Expect checkout homeHeader should displayed').toBeDisplayed();

// 	})

// 	it('Fill the forms and place the order', async () => {
// 		await paymentPage.fillPaymentForm();
// 		await expect(paymentPage.$orderAlert()).withContext('Expect "Order placed successfully" should displayed').toBeDisplayed();
// 	})

// 	afterAll(async () => {
// 		await landingPage.browserClose();
// 	})

// })

// describe('TC016 - Verify the subtotal amount is equal to sum of each product price', () => {
// 	it(`Land to "${testData.url}"`, async () => {
// 		await landingPage.loadUrl(testData.url);
// 		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
// 	});

// 	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
// 		await landingPage.login();
// 		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
// 	});

// 	it('Click on  "Shop by Category" menu and select a category "Laptops"', async () => {
// 		await landingPage.shopByCategory('Laptops');
// 		await expect(landingPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
// 	})

// 	it('Select first product from Laptop category', async () => {
// 		await categoryPage.addProductToCart();
// 		await expect(categoryPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
// 	})

// 	it('Click on  "Shop by Category" menu and select a category "Mobiles"', async () => {
// 		await landingPage.shopByCategory('Mobiles');
// 		await expect(landingPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
// 	})

// 	it('Select first product from Mobile category', async () => {
// 		await categoryPage.addProductToCart();
// 		await expect(categoryPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
// 	})

// 	it('Verify user should navigate to "Cart page" clicking "Cart" icon', async () => {
// 		await cartPage.goToCartPage();
// 		await expect(cartPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
// 	})

// 	it(`Verify the Subtotal amount is equal to sum of each product price`, async () => {
// 		let subtotal = await cartPage.totalProductPrice();
// 		expect(subtotal).withContext(`Expect subtotal amount is equal to sum of each product price`).toBe(true);
// 	})

// 	afterAll(async () => {
// 		await landingPage.browserClose();
// 	})

// })

// describe('TC017 - Verify the continue shopping button after resetting the cart', () => {
// 	it(`Land to "${testData.url}"`, async () => {
// 		await landingPage.loadUrl(testData.url);
// 		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
// 	});

// 	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
// 		await landingPage.login();
// 		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
// 	});

// 	it('Click on  "Shop by Category" menu and select a category "Laptops"', async () => {
// 		await landingPage.shopByCategory('Laptops');
// 		await expect(landingPage.$cartHeader()).withContext('Expect cart home header should displayed').toBeDisplayed();
// 	})

// 	it('Select first product from Laptop category', async () => {
// 		await categoryPage.addProductToCart();
// 		await expect(categoryPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
// 	})

// 	it('Verify user should navigate to "Cart page" clicking "Cart" icon', async () => {
// 		await cartPage.goToCartPage();
// 		await expect(cartPage.$cartHeader()).withContext('Expect cart home header should displayed').toBeDisplayed();
// 	})

// 	it('Verify user can reset the cart by clicking on reset cart button', async () => {
// 		await cartPage.resetCart();
// 		await expect(cartPage.$header("Your Cart feels lonely.")).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
// 	})

// 	it('Click on the "Continue Shopping" button', async () => {
// 		await cartPage.continueShopping();
// 		await expect(landingPage.$header("Products")).withContext('Expect user navigate to product page').toBeDisplayed();
// 	})

// 	afterAll(async () => {
// 		await landingPage.browserClose()
// 	})
// })

// describe('TC018 - Verify the continue shopping button in about tab', () => {
// 	it(`Land to "${testData.url}"`, async () => {
// 		await landingPage.loadUrl(testData.url);
// 		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
// 	});

// 	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
// 		await landingPage.login();
// 		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
// 	});

// 	it('Verify that user can navigate to "About Page" by clicking about button from navigate', async () => {
// 		await landingPage.$navItem("About");
// 		await expect(landingPage.$header("About")).withContext('Expect header should display successfully').toBeDisplayed();
// 	})

// 	afterAll(async () => {
// 		await landingPage.browserClose()
// 	})
// })

// describe('TC019 - Verify the user is able to add the product to the wishlist', () => {
// 	it(`Land to "${testData.url}"`, async () => {
// 		await landingPage.loadUrl(testData.url);
// 		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
// 	});

// 	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
// 		await landingPage.login();
// 		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
// 	});

// 	it('Click on  "Shop by Category" menu and select a category "Mobiles"', async () => {
// 		await landingPage.shopByCategory('Mobiles');
// 		await expect(landingPage.$cartHeader()).withContext('Expect cart home header should displayed').toBeDisplayed();
// 	})
// 	it('Select first product from "Mobile" category and add to wishlist', async () => {
// 		await categoryPage.productWishlist();
// 		await expect(categoryPage.$wishListAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
// 	})

// 	afterAll(async () => {
// 		await landingPage.browserClose()
// 	})
// })

// describe('TC020 -Verify if the user is able to add the product to the cart which is in wishlist', () => {
// 	it(`Land to "${testData.url}"`, async () => {
// 		await landingPage.loadUrl(testData.url);
// 		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
// 	});

// 	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
// 		await landingPage.login();
// 		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
// 	});

// 	it('Click on  "Shop by Category" menu and select a category "Mobiles"', async () => {
// 		await landingPage.shopByCategory('Mobiles');
// 		await expect(landingPage.$cartHeader()).withContext('Expect cart home header should displayed').toBeDisplayed();
// 	})

// 	it('Select first product from "Mobile" category and add to wishlist', async () => {
// 		await categoryPage.productWishlist();
// 		await expect(categoryPage.$wishListAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
// 	})

// 	it('Verify user can navigate to wishlist page by clicking wishlist icon', async () => {
// 		await categoryPage.goToWhishList();
// 		await expect(categoryPage.$header("Wishlist")).withContext('Expect user navigate to wishlist page').toBeDisplayed();
// 	})

// 	it('Select first product from wishlist and add to cart', async () => {
// 		await categoryPage.addProductToCart();
// 		await expect(categoryPage.$addCartAlert()).withContext('Expect "Added to cart" should displayed').toBeDisplayed();
// 	})

// 	afterAll(async () => {
// 		await landingPage.browserClose()
// 	})
// })

// describe('TC021 - Verify if the user can reset the wishlist', () => {
// 	it(`Land to "${testData.url}"`, async () => {
// 		await landingPage.loadUrl(testData.url);
// 		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
// 	});

// 	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
// 		await landingPage.login();
// 		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
// 	});

// 	it('Verify user can navigate to wishlist page by clicking wishlist icon', async () => {
// 		await categoryPage.goToWhishList();
// 		await expect(categoryPage.$header("Wishlist")).withContext('Expect user navigate to wishlist page').toBeDisplayed();
// 	})

// 	it('Verify user can reset the wishlist by clicking on reset wishlist button', async () => {
// 		await categoryPage.resetWishlist();
// 		await expect(whishListPage.$button("Continue Shopping")).withContext('Expect continue shopping button should displayed').toBeDisplayed();
// 	})

// 	afterAll(async () => {
// 		await landingPage.browserClose()
// 	})

// })

// describe('TC022 - Verify user is able to update their profile', () => {
// 	it(`Land to "${testData.url}"`, async () => {
// 		await landingPage.loadUrl(testData.url);
// 		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
// 	});

// 	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
// 		await landingPage.login();
// 		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
// 	});

// 	it('Verify user can navigate to profile page by clicking profile button from the profile dropdown ', async () => {
// 		await landingPage.goToProfile();
// 		await expect(profilePage.$h2Header("User Profile")).withContext('Expect user navigate to profile page').toBeDisplayed();
// 	})

// 	it('Verify user is able to update their profile', async () => {
// 		await profilePage.editProfile();
// 		await expect(profilePage.$successAlert()).withContext('Expect user navigate to profile page').toBeDisplayed();
// 	})

// 	afterAll(async () => {
// 		await landingPage.browserClose()
// 	})
// })

// describe('TC023 - Verify user is able to logout.', () => {
// 	it(`Land to "${testData.url}"`, async () => {
// 		await landingPage.loadUrl(testData.url);
// 		await expect(landingPage.$homeHeader()).withContext('Expect url should launch successfully').toBeDisplayed();
// 	});

// 	it('Verify login to the e-commerce by clicking on profile icon dropdown on top right side of the screen', async () => {
// 		await landingPage.login();
// 		await expect(landingPage.$profileFloat()).withContext('Expect user login successfully').toBeDisplayed();
// 	});

// 	it('Verify user can click on the profile icon and logout', async () => {
// 		await landingPage.logout();
// 		await expect(landingPage.$logoutAlert).withContext('Expect user logout successfully').toBeDisplayed();
// 	})

// 	afterAll(async () => {
// 		await landingPage.browserClose()
// 	})
// })

describe('TC0026 - ', () => {
	it(`Land to "${testData.url}"`, async () => {
		await landingPage.loadUrl(testData.url);
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
		productName = await cartPage.getProductDetail();
		await expect(cartPage.$cartHeader()).withContext('Expect cart homeHeader should displayed').toBeDisplayed();
	})

	it('Verify user can click on proceed to checkout button', async () => {
		await cartPage.proceedToCheckout();
		await expect(cartPage.$header("Payment Gateway")).withContext('Expect checkout homeHeader should displayed').toBeDisplayed();

	})

	it('Fill the forms and place the order', async () => {
		await paymentPage.fillPaymentForm();
		await expect(paymentPage.$orderAlert()).withContext('Expect "Order placed successfully" should displayed').toBeDisplayed();
	})

	it('Click on the profile icon and select "My Orders"', async () => {
		await landingPage.goToOrder();
		await expect(paymentPage.$header("My Orders")).withContext('Expect user navigate to order page').toBeDisplayed();
	})

	it('Verify the order page displays the ordered product', async () => {
		await expect(paymentPage.$orderedProduct(productName)).withContext('Expect user navigate to order page').toBeDisplayed();
	})

	afterAll(async () => {
		await landingPage.browserClose()
	})
})
