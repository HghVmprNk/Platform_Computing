const { Builder, By, Key, until } = require('selenium-webdriver');

// Initialize Selenium WebDriver
const driver = new Builder().forBrowser('chrome').build();

// Recursive function to check for link, images, and keywords
async function checkWebsite(url) {
    await driver.get(url);

    // Check for link
    const link = await driver.findElement(By.tagName('a')).catch(() => null);
    if (link) {
        // Extend presence time by 10 seconds and click on the link
        await driver.wait(until.elementIsVisible(link), 5000);
        await link.click();
        await driver.sleep(10000); // Extend presence time by 10 seconds
    }

    // Check for images and keywords here (not included in this example)

    // Recursively check other requirements if needed

    // Return presence time
    return link ? 10 : 0;
}

// URLs for testing (one with a link, one without)
const urlWithLink = 'http://localhost:3000';
const urlWithoutLink = 'http://localhost:3000';

// Check presence of link and get presence time
async function runScript() {
    const presenceTimeWith = await checkWebsite(urlWithLink);
    const presenceTimeWithout = await checkWebsite(urlWithoutLink);

    // Output presence time to terminal
    console.log(`Presence Time with Link: ${presenceTimeWith} seconds`);
    console.log(`Presence Time without Link: ${presenceTimeWithout} seconds`);

    // Close the WebDriver
    await driver.quit();
}

// Run the script
runScript().catch(console.error);
