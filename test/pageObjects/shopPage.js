import CommonPage from "./commonPage.js";

class ShopPage extends CommonPage {
	constructor() {
		super();
		/**
		 * Element
		 */
		this.$filterCategory=(category)=>$(`//span[text()="Shop by ${category}"]/..`);
		this.$filterOptions=(option)=>$(`//input[@id="${option}"]`);
		this.$$productsName=()=>$$(`//h2[@class="text-lg font-bold text-gray-800"]`);
	}
/**
 * Methods
 */
	/**
	 * Filter the products by category and option
	 * @param {string} category - The category to filter by
	 * @param {string} option - The option to filter by
	 */
	async filterProducts(category, option) {
		await this.elementClick(this.$filterCategory(category));
		await this.elementClick(this.$filterOptions(option));
		await this.$$productsName()[0].waitForDisplayed({  timeoutMsg: 'Products not displayed' });
		await this.spinnerWait();
		const products = await this.$$productsName();
		if (products.length === 0) {
			throw new Error("No products found after filtering");
		}
		let names = [];
		for (let product of products) {
			let name = await product.getText();
			names.push(name);
		}
	
		return names;
	}
	

}

export default new ShopPage();