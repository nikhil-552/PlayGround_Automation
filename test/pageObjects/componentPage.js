import CommonPage from "./commonPage.js";

class ComponentPage extends CommonPage {
	constructor() {
		super();
		/**
		 * Elements
		 */
		this.$componentLearnMore=(component)=>$(`//h2[text()="${component}"]/../a[text()="Learn more"]`);
		// this.$popUpButton=()=>$(`//button[text()="Open Pop Window"]`);
		this.$popUpHeader=()=>$('//h2[text()="Pop Window Content"]');
		this.$popUpClose=()=>$('//h2[text()="Pop Window Content"]/../button[text()="Close"]');
	}
/**
 * Methods
 */
	/**
	 * Clicking on the Learn more Button
	 * @param {string} component 
	 */
	async clickLearnMore(component) {
		await this.elementClick(this.$componentLearnMore(component));
		await this.spinnerWait();
	}

	/**
	 * Clicking on the Pop Up Button
	 */
	async clickPopUpButton() {
		await this.elementClick(this.$commonButton("Open Pop Window"));
		await this.spinnerWait();
		await this.$popUpHeader().waitForDisplayed({ timeoutMsg: 'Header not displayed' });
	}

	/**
	 * Closing the Pop Up by close button
	 */
	async closePopUp() {
		await this.elementClick(this.$popUpClose());
		await this.$commonButton("Open Pop Window").waitForDisplayed({ timeoutMsg: 'Pop up button is not Displayed' })
	}

}
export default new ComponentPage();