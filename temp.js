const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
var connect = require('connect');
var serveStatic = require('serve-static');
const chromedriver = require('chromedriver');
var chrome = require("selenium-webdriver/chrome");

connect().use(serveStatic(chromedriver.path)).listen(8888, runSeleniumDriver);

function runSeleniumDriver(server) {
    console.log("running selenium");

    let driver = new Builder()
        .forBrowser('chrome')
        .build();
    driver.get("http://google.com");

    try {
        driver.wait(until.titleIs('Test'), 30000);
    } catch (err) {
      driver.wait(until.titleIs('Test'), 30000);
    } finally {
      driver.wait(until.titleIs('Test'), 30000);
        driver.close();
        driver.quit();
    }
}