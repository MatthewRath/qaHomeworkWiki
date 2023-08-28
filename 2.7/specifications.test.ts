import { specPage } from "./specPage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new specPage(driver);

test("it works", async () => {
  await page.navigate();
  await page.doSearch("purple");
});

afterAll(async () => {
  await driver.quit();
});