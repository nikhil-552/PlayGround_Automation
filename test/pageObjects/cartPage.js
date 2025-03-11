import CommonPage from "./commonPage.js";

class CartPage extends CommonPage {
	constructor() {
		super();
		/**
		 * Elements
		 */
		this.$cart = () => $('//p[text()="Buy Now"]/..');
		this.$cartHeader = () => $('//h1[text()="Cart"]');
		this.$quantityChange = (change) => $(`(//div[@class="mt-5"]//span[text()="${change}"])[1]`);
		this.$cartCount = () => $('(//div[@class="mt-5"]//p)[1]');
		this.$$totalProduct = () => $$('//div[@class="mt-5"]/div');
		this.$productPrice = (count) => $(`((//div[@class="mt-5"]/div)[${count}]//p)[2]`);
		this.$subtotal = () => $('//p[text()="Subtotal"]/span/text()[2]');
	}

	/**
	 * Methods
	 */

	/**
	 * Navigate to the cart page
	 */
	async goToCartPage() {
		await this.elementClick(this.$cart());
		await this.$cartHeader().waitForDisplayed({ timeoutMsg: 'Expect cart header should displayed' });
	}

	/**
	 * Changing the quantity of the product added to the cart by clicking + or - buttons
	 * @param {string} change // values + or -
	 * @returns {boolean} quantity
	 */
	async changeQuantity(change) {
		const initialCount = await this.$cartCount().getText();
		await this.elementClick(this.$quantityChange(change));
		await this.spinnerWait();
		await browser.pause(1000);
		const finalCount = await this.$cartCount().getText();
		return finalCount != initialCount;
	}

	/**
	 * Resetting the cart 
	 */
	async resetCart() {
		await this.elementClick(this.$button("Reset cart"));
		await this.$commonHeader("Your Cart feels lonely.").waitForDisplayed({ timeoutMsg: 'Expect cart header should displayed' });
	}

	/**
	 * Clicking on proceed to checkout
	 */
	async proceedToCheckout() {
		await this.elementClick(this.$button("Proceed to Checkout"));
		await this.$commonHeader("Payment Gateway").waitForDisplayed({ timeoutMsg: 'Expect checkout header should displayed' });
	}

	/**
	 * Calculating the total product price
	 * @returns {boolean} 
	 */
	async totalProductPrice() {
		let product_count = await this.$$totalProduct().length;
		let total_price = 0;
		for (let i = 0; i < product_count; i++) {
			let priceText = await this.$productPrice(i + 1).getText();
			let price = parseInt(priceText.replace('$', '').trim());
			total_price += price;
		}
		let subTotal = await this.$subtotal().getText();
		let subTotalPrice = subTotal.replace('$', '').trim();
		return total_price == subTotalPrice;
	}
}
export default new CartPage();
