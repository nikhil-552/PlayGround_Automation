import CommonPage from "./commonPage.js";
import testData from "../testData/playGround.json" assert{ type: 'json' };

class PaymentPage extends CommonPage {
	constructor() {
		/**
		 * Element
		 */
		super();
		this.$formTextBox = (text) => $(`//label[text()="${text}"]/../input`);
		this.$address = () => ('//label[text()="Address"]/../textarea');
		this.$orderAlert = () => $('//div[text()="Order Placed Successfully!"]');
		this.$orderedProduct = (product) => $(`(//div[@class="p-4"]//div//p[text()="${product}"])[1]`)
	}
	/**
	 * Methods
	 */
	
	/**
	 * Filling the form in payment Page
	 */
	async fillPaymentForm() {
		for (let i = 0; i < testData.paymentForm.length; i++) {
			await this.inputTextbox(this.$formTextBox(testData.paymentForm[i]), testData.paymentData[i]);
		}
		await this.inputTextbox(this.$address(), testData.paymentData[3]);
		await this.buttonClick(this.$button("Place Order"));
		await this.$orderAlert().waitForDisplayed({ timeoutMsg: 'Message not displayed' });
	}
}
export default new PaymentPage();