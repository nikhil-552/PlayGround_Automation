export default class CommonPage {
    constructor() {
        /**
         * Element
         */
        this.$homeHeader = () => $('//div[text()="PlayGround"]');
        this.$spinner = () => $('//div[@class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"]');
        this.$componentHeader = () => $('//h1[text()="Explore Components"]');
        this.$button = (text) => $(`//button[text()="${text}"]`);
        this.$header = (header) => $(`//h1[text()="${header}"]`);
        this.$wishListButton = () => $('//a[@href="/wishlist"]');
        this.$h2Header = (header) => $(`//h2[text()="${header}"]`);
    }

    /**
     * Methods
     */

    /**
     * Load the landing page
     * @param {string} url
     */
    async loadUrl(url) {
        await browser.url(url);
        await browser.maximizeWindow();
    }

    /**
     * Clicking on the element.
     * @param {locator} locator 
     */
    async elementClick(locator) {
        const element = await locator;
        await element.waitForDisplayed({ timeoutMsg: 'Element not displayed' });
        await element.click();
    }

    /**
     * Filling data in textbox
     * @param {locator} locator 
     * @param {string} value 
     */
    async inputTextbox(locator, value) {
        const element = await locator;
        await element.waitForDisplayed({ timeoutMsg: 'Input field not displayed' });
        await element.setValue(value);
    }

    /**
     * Clicking on the Button
     * @param {locator} locator 
     */
    async buttonClick(locator) {
        const element = await locator;
        await element.waitForDisplayed({ timeoutMsg: 'Button not displayed' });
        await element.click();
    }

    /**
     * Waiting for spinner to disappear
     */
    async spinnerWait() {
        await this.$spinner().waitForDisplayed({ reverse: true, timeoutMsg: 'Spinner not displayed' });
    }

    /**
     * Closing the browser
     */
    async browserClose() {
        await browser.deleteAllCookies();
        await browser.reloadSession();
    }

    /**
     * Go to wishlist
     */
    async goToWhishList() {
        await this.buttonClick(this.$wishListButton());
        await this.$header("Wishlist").waitForDisplayed({ timeoutMsg: 'Wishlist header displayed' });
    }
}
