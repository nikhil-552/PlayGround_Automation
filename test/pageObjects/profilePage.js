import CommonPage from "./commonPage.js";
import testData from "../testData/playGround.json" assert{ type: 'json' };
class ProfilePage extends CommonPage {
	constructor() {
		/**
		 * Element
		 */
		super();
		this.$fullName = () => $('//label[text()="Full Name"]/../input');
		this.$gender = () => $('//label[text()="Gender"]/../select');
		this.$genderValue = (value) => $(`//label[text()="Gender"]/../select/option[@value="${value}"]`);
		this.$country = () => $('//label[text()="Country"]/../input');
		this.$bio = () => $('//label[text()="Bio"]/../textarea');
		this.$successAlert = () => $('//div[@role="alert"]//div[text()="Successful!"]')
	}
	/**
	 * Methods
	 */

	/**
	 * Editing the profile
	 */
	async editProfile() {
		await this.buttonClick(this.$button("Edit"));
		await this.inputTextbox(this.$fullName(), testData.profileDetails[0]);
		await this.$gender().selectByVisibleText("Female");
		await this.elementClick(this.$country());
		await this.inputTextbox(this.$country(), testData.profileDetails[2]);
		await this.inputTextbox(this.$bio(), testData.profileDetails[3]);
		await this.buttonClick(this.$button("Save"));
		await this.$successAlert().waitForDisplayed({ timeoutMsg: 'Profile not updated' });
	}
}
export default new ProfilePage();