import {By, until, WebDriver} from 'selenium-webdriver';


export class specPage {
    driver: WebDriver;

    url: string = "https://www.google.com";

    searchBar: By = By.name('q')
    results: By = By.id("rso")

    constructor(driver: WebDriver) {
        this.driver = driver;
        
    }

    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.searchBar))
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return (await this.driver.findElement(elementBy)).getText()
    }
    async doSearch(test: string) {
        return this.sendKeys(this.searchBar, ('${Text}\n'))
    }
    async getResults() {
        return this.getText(this.results)
    }
}

//patients is the key....
