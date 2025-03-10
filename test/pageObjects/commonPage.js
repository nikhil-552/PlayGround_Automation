export default class CommonPage {
    constructor() {
        /**
         * Element
         */
        this.url = 'https://www.playground.testingmavens.tools/';
        this.$header = () => $('//div[text()="PlayGround"]');
        this.$spinner = () => $('//div[@class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"]');
        this.$componentHeader = () => $('//h1[text()="Explore Components"]');
        this.$commonButton = (text) => $(`//button[text()="${text}"]`);
        this.$commonHeader = (header) => $(`//h1[text()="${header}"]`);
    }

/**
 * Methods
 */

    /**
     * Load the landing page
     */

    async loadUrl() {
        await browser.url(this.url);
        await browser.maximizeWindow();
        await this.$header().waitForDisplayed({ timeout: 10000, timeoutMsg: 'Header not displayed' });
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
        await element.waitForDisplayed({  timeoutMsg: 'Input field not displayed' });
        await element.setValue(value);
    }

    /**
     * Clicking on the Button
     * @param {locator} locator 
     */
    async buttonClick(locator) {
        const element = await locator;
        await element.waitForDisplayed({  timeoutMsg: 'Button not displayed' });
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
}
