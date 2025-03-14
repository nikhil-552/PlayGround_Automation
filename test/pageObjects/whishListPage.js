import CommonPage from "./commonPage.js";

class WhishListPage extends CommonPage {
	constructor() {
		/**
		 * Element
		 */
		super();
	}
	/**
	 * Methods
	 */
	/**
	 * Reset the wish list
	 */
	async resetWishList() {
		await this.buttonClick(this.$button("Reset Wishlist"));
		await this.$button("Continue Shopping").waitForDisplayed({ timeoutMsg: 'Expect continue shopping button should displayed' });
	}
}
export default new WhishListPage();