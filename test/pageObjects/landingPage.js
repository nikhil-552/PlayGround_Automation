import CommonPage from "./commonPage.js";
import testData from "../testData/playGround.json" assert{ type: 'json' };

class LandingPage extends CommonPage {
    constructor() {
        super();
        /**
         * Element
         */
        this.$profileIcon = () => $('(//div[@class="max-w-container mx-auto"]//div[@class="relative"])[2]');
        this.$loginButton = () => $('//li[text()="Login"]/..');
        this.$profileButton = () => $('//ul/a[@href="/profile"]');
        this.$logout = () => $('//ul/li[text()="Log Out"]');
        this.$order = () => $('//ul/a[@href="/orders"]');
        this.$loginForm = (name) => $(`//input[@id="${name}"]`);
        this.$profileFloat = () => $('//p[text()="Profile"]/../parent::a');
        this.$navItem = (item) => $(`//a[text()="${item}"]/..`);
        this.$cartHeader = () => $('//h1[text()="Products"]');
        this.$searchBox = () => $('//input[@placeholder="Search your products here"]');
        this.$searchBoxProduct = (product) => $(`//p[text()="${product}"]/../..`);
        this.$shopByCategory = () => $('//p[text()="Shop by Category"]/../..');
        this.$selectCategory = (category) => $(`//li[text()="${category}"]/..`);
        this.$randomProductHeader = () => $('//h1');
        this.$productHeader = (product) => $(`//h1[text()="${product}"]`);
        this.$newArriveProduct = () => $('(//div[text()="Our Bestsellers"]/..//h2/../../..)[1]');
        this.$categoryShopNow = (category) => $(`//h2[contains(text(), "${category}") and contains(normalize-space(), "Sale")]/..//button[text()="Shop Now"]`);
        this.$randomProductAddToCart = () => $('//div[text()="New Arrivals"]/..//div[@data-index="2"]//button[text()="Add to Cart "]');
        this.$addCartAlert = () => $('//div[@role="alert"]//div[text()="Added Succesfully!"]');
        this.$logoutAlert = () => $('//div[text()="Logout Successful!"]');


    }
    /**
     * Method
     */

    /**
     * Clicking on the "Profile Button" then "Login Button" and fill data to the textbox and clicking on login button
     */
    async login() {
        await this.elementClick(this.$profileIcon());
        await this.elementClick(this.$loginButton());
        await this.inputTextbox(this.$loginForm('email'), testData.email);
        await this.inputTextbox(this.$loginForm('password'), testData.password);
        await this.buttonClick(this.$button("Login"));
        await this.$profileFloat().waitForDisplayed({ timeoutMsg: 'Login was unsuccessful' });
    }

    /**
     * Clicking on item from navigation bar
     * @param {string} item 
     */
    async clickNavItem(item) {
        await this.elementClick(this.$navItem(item));
    }

    /**
     * Search for a product in search bar
     * @param {string} product 
     */
    async searchProduct(product) {
        await this.inputTextbox(this.$searchBox(), product);
        await this.elementClick(this.$searchBoxProduct(product));
        await this.$productHeader(product).waitForDisplayed({ timeoutMsg: 'Product not displayed' });
    }

    /**
     * Clicking on shop by category and select category
     * @param {string} category
     */
    async shopByCategory(category) {
        await this.elementClick(this.$shopByCategory());
        await this.elementClick(this.$selectCategory(category));
        await this.$header("Products").waitForDisplayed({ timeoutMsg: 'Product not displayed' });
    }

    /**
     * Selecting a new arrived product
     */
    async selectNewArriveProduct() {
        await this.elementClick(this.$newArriveProduct());
        await this.$randomProductHeader().waitForDisplayed({ timeoutMsg: 'Product not displayed' });
    }

    /**
     * Selecting the "Category banner" in homepage and clicking on the "Shop now" button from the banner
     * @param {*} category 
     */
    async selectCategoryShopNow(category) {
        await this.elementClick(this.$categoryShopNow(category));
        await this.$cartHeader().waitForDisplayed({ timeoutMsg: 'Cart header is not displayed' });
    }

    /**
     * Adding a random product to the cart
     */
    async addToCart() {
        await this.elementClick(this.$randomProductAddToCart());
        await this.$addCartAlert().waitForDisplayed({ timeoutMsg: 'Added to cart alert should displayed' });
    }
    /**
     * Navigating to the profile page
     */

    async goToProfile() {
        await this.elementClick(this.$profileIcon());
        await this.elementClick(this.$profileButton());
        await this.$h2Header("User Profile").waitForDisplayed({ timeoutMsg: 'Profile page not displayed' });
    }

    /**
     * going to the order page
     */
    async goToOrder() {
        await this.elementClick(this.$profileIcon());
        await this.elementClick(this.$order());
    }

    /**
     * Logging out
     */
    async logout() {
        await this.elementClick(this.$profileIcon());
        await this.elementClick(this.$logout());
        if (await browser.isAlertOpen()) {
            await browser.acceptAlert();
        }
    }
}

export default new LandingPage();
