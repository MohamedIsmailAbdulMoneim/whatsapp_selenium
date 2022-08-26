let arrOfNums = [

]


const { Builder, Browser, By, Key, until, time } = require('selenium-webdriver');


(async function example() {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.get('https://web.whatsapp.com/');
    await driver.sleep(30000)
    const filePath = 'D:\\newwhatsapp\\photos\\'
    const link = "http://www.ngvc-egypt.com"
    for (let i = 0; i < arrOfNums.length; i++) {
        try{
            await driver.wait(until.elementLocated(By.css("div[title='Search input textbox']")))
            await driver.findElement(By.css("div[title='Search input textbox']")).sendKeys(arrOfNums[i], Key.RETURN)
            await driver.sleep(1500)
            await driver.wait(until.elementLocated(By.css("div[title='Type a message']")))
            for(const s of link){
                await driver.findElement(By.css("div[title='Type a message']")).sendKeys(s)
            }
            await driver.findElement(By.css("div[title='Type a message']")).sendKeys(Key.ENTER)
            await driver.findElement(By.css("span[data-icon='clip']")).click();
            await driver.wait(until.elementLocated(By.css("input[type='file']"))).sendKeys();
            await driver.wait(until.elementLocated(By.css("span[data-icon='send']")))
            await driver.findElement(By.css("span[data-icon='send']")).click();
            await driver.sleep(1000)
        } catch(error){
            await driver.findElement(By.css("div[title='Search input textbox']")).clear()
            console.log(arrOfNums[i]);
            console.log(error);
        }
    }
    await driver.sleep(40000)
})()
