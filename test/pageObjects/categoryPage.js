import CommonPage from "./commonPage.js";

class CategoryPage extends CommonPage {
	constructor() {
		super();
		/**
		 * Elements
		 */
		this.$$productAddCart = () => $$('/div[@class="w-full"]//button[text()="Add to Cart "]');
		this.$addCartAlert = () => $('//div[@role="alert"]//div[text()="Added Successfully!"]');
		this.$whishListButton = () => $('(//button[text()="Wish List "])[1]');
		this.$wishListAlert = () => $('//div[text()="Product added to wish List"]')
	}
	/**
	 * Methods
	 */

	/**
	 * Add product to cart from selected category
	 */
	async addProductToCart() {
		await this.buttonClick(this.$button("Add to Cart "));
		await this.$addCartAlert().waitForDisplayed({ timeoutMsg: 'Added to cart alert not displayed' });
	}

	/**
	 * Add product to wishlist
	 */
	async productWishlist() {
		await this.buttonClick(this.$whishListButton());
		await this.$wishListAlert().waitForDisplayed({ timeoutMsg: 'Added to wishlist alert displayed' });
	}

}
export default new CategoryPage();