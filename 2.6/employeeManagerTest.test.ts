import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
    header: By = By.css('.titleText')
    addEmployee: By = By.name('employee1')
    newEmployee: By= By.name('employee11')
    nameInput: By = By.name('nameEntry')
    phoneInput: By = By.name('phoneEntry')
    titleInput: By = By.name('titleEntry')
    //constructor
    constructor(driver: WebDriver) {
        this.driver = driver
    }
    //methods
    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.header))
    }
    
 }
    const emPage = new employeePage(driver)

    describe("Employee Manger Test", () => {
      
      test("adding an employee", async () => {
        await emPage.navigate()
         // await driver.sleep(2000)
          //await driver.wait(until.elementLocated(emPage.header))
          await driver.sleep(2000)
          await driver.findElement(emPage.addEmployee).click()
          
          await driver.findElement(emPage.nameInput).click()
          await driver.findElement(emPage.nameInput).clear()
          await driver.findElement(emPage.nameInput).sendKeys("Change this")
          await driver.findElement(emPage.phoneInput).click()
          await driver.findElement(emPage.phoneInput).clear()
          await driver.findElement(emPage.phoneInput).sendKeys("Change this")
          await driver.findElement(emPage.titleInput).click()
          await driver.findElement(emPage.titleInput).clear()
          await driver.findElement(emPage.titleInput).sendKeys("Change this")
          await driver.quit()
  })

})
//did not like addEmployee function and changed it to employee1, had to remove some codes as well