import CommonPage from "./commonPage.js";

class CategoryPage extends CommonPage {
	constructor() {
		super();
		/**
		 * Elements
		 */
		this.$$productAddCart = () => $$('/div[@class="w-full"]//button[text()="Add to Cart "]');
		this.$addCartAlert = () => $('//div[@role="alert"]//div[text()="Added Successfully!"]');
	}
	/**
	 * Add product to cart from selected category
	 */
	async addProductToCart() {
		await this.buttonClick(this.$$productAddCart()[0]);
		await this.$addCartAlert().waitForDisplayed({  timeoutMsg: 'Added to cart alert not displayed' });
	}
}
export default new CategoryPage();