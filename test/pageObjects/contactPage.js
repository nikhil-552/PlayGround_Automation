import CommonPage from "./commonPage.js";
import testData from "../testData/playGround.json" assert{ type: 'json' };

class ContactPage extends CommonPage {
	constructor() {
		super();
		/**
		 * Elements
		 */
		this.$formBoxes=(box)=>$(`//p[text()="${box}"]/..//input`);
		this.$messageBox=()=>$('//p[text()="Messages"]/..//textarea');
		this.$thankYouMessage=()=>$('//p[contains(text(),"Thank you")]');
	}
/**
 * Methods
 */
	
/**
 * Filling the form in contact Page
 * @param {FormHeader} formName 
 * @param {FormValue} formValue 
 */

	async fillContactForm(formName, formValue) {
		let length =testData.ContactForms.length;
		for (let i = 0; i < length; i++) {
			await this.inputTextbox(this.$formBoxes(testData.ContactForms[i]),testData.ContactData[i]);
		}
		await this.inputTextbox(this.$messageBox(),testData.ContactData[2]);
		await this.buttonClick(this.$commonButton("Post"));
		await this.$thankYouMessage().waitForDisplayed({ timeoutMsg: 'Message not displayed' });
	}
}
export default new ContactPage();	