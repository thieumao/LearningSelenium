const fs = require('fs');
const chromedriver = require('chromedriver');
describe('test google.com', () => {

    const {
        Builder,
        By,
        Key,
        until
    } = require('selenium-webdriver');
    var driver;

    beforeEach(() => {
        driver = new Builder()
            .forBrowser('chrome')
            .build();
    });

    afterEach(() => {
        driver.quit();
    });

    const url = 'https://www.google.com/';

    it('should open google search', async () => {
        await driver.get(url);
        driver
            .getTitle()
            .then(title => {
                expect(title).toEqual('Google');
            });
    });

    it('should open google search and view search results', async () => {
        await driver.get(url);
        var element = await driver.findElement(By.css('input[name=q]'));
        await element.sendKeys("selenium", Key.RETURN);
        await driver.wait(until.titleContains("selenium"), 4000);
        driver
            .getTitle()
            .then(title => {
                expect(title).toEqual('selenium - Tìm với Google');
            });
    });

    // it('should open google search and do image search', async () => {
    //     await driver.get(url);
    //     var element = await driver.findElement(By.css('input[title=Search]'));
    //     await element.sendKeys("selenium", Key.RETURN);
    //     await driver.wait(until.titleContains("selenium"), 4000);
    //     var imageSearch = driver.findElement(By.xpath("//a[contains(text(), 'Images')]"));
    //     await imageSearch.click();
    //     let image = await driver.takeScreenshot();
    //     fs.writeFileSync('out.png', image, 'base64');
    // });

});