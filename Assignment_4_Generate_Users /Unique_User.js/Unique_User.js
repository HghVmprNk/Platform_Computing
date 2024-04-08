const { Builder, By, Key, until } = require('selenium-webdriver');

// Initialize Selenium WebDriver
const driver = new Builder().forBrowser('chrome').build();

// Function to interact with links and extend stay
async function interactWithLinks(url) {
    await driver.get(url);
    let stayDuration = 0;

    try {
        // Find all links on the page
        const links = await driver.findElements(By.tagName('a'));
        for (const link of links) {
            // Re-find the link to avoid stale element reference error
            const freshLink = await driver.findElement(By.linkText(await link.getText()));
            await freshLink.click();
            await driver.sleep(2000); // Simulate reading the content
            stayDuration += 30; // Extend stay by 30 seconds for each link clicked
            await driver.navigate().back(); // Go back to the original page
        }
    } catch (error) {
        // Handle stale element error
        console.error('StaleElementReferenceError:', error.message);
    }

    return stayDuration;
}

// URL for testing
const websiteURL = 'http://localhost:3000';

// Calculate and output total stay duration
async function calculateStayDuration() {
    const linkStay = await interactWithLinks(websiteURL);
    console.log(`Total Stay Duration: ${linkStay} seconds`);
}

// Run the script
calculateStayDuration().then(() => {
    // Close the WebDriver
    driver.quit();
}).catch(err => {
    console.error(err);
    // Close the WebDriver in case of an error
    driver.quit();
});




