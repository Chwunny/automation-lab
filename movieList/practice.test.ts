// Start of Intermediate //

import { afterAll, beforeAll, test } from "@jest/globals"
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get(`http://localhost:5501/movieList/index.html`)
})

afterAll(async () => {
    await driver.quit()
})

test('Add a movie to the page', async () => {
    

    let inputField = await driver.findElement(By.xpath('//form/input'))

    let addButton = await driver.findElement(By.xpath('//button[text()="Add"]'))

    await inputField.sendKeys('Tenet')

    await addButton.click()

    await driver.sleep(3000)
})

// End of Intermediate //

// Start of Advanced //

test('Cross off a movie', async () => {
    
    let movie = await driver.findElement(By.xpath('//span[1]'))

    await movie.click()

    await driver.sleep(2000)

    await movie.click()
    
    await driver.sleep(2000)
})

test('Delete a movie', async () => {
   
    let button = await driver.findElement(By.xpath('//button[text()="x"]'))

    await button.click()

    await driver.sleep(2000)
  
})
 
// End of Advanced //