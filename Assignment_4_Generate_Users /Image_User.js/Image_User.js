const { Builder, By, Key, until } = require('selenium-webdriver');

// Initialize Selenium WebDriver
const driver = new Builder().forBrowser('chrome').build();

// Function to check for images and extend presence time
async function checkImagePresence(url) {
    await driver.get(url);
    const images = await driver.findElements(By.tagName('img'));
    const numImages = images.length;
    return numImages * 10; // Extend presence time by 10 seconds for each image
}

// URLs for testing (one with images, one without)
const urlWithImages = 'http://localhost:3000';
const urlWithoutImages = 'http://localhost:3000';

// Check presence of images and get presence time
async function runScript() {
    const presenceTimeWith = await checkImagePresence(urlWithImages);
    const presenceTimeWithout = await checkImagePresence(urlWithoutImages);

    // Output presence time to terminal
    console.log(`Presence Time with Images: ${presenceTimeWith} seconds`);
    console.log(`Presence Time without Images: ${presenceTimeWithout} seconds`);

    // Close the WebDriver
    await driver.quit();
}

// Run the script
runScript().catch(console.error);

