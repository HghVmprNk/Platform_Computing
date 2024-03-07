const { Builder, By } = require('selenium-webdriver');

async function trackMetrics() {
    // Initialize Selenium WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to your website
        await driver.get('http://localhost:3000');

        let start_time = Date.now();
        let presence_time = start_time;

        // Track presence time, scrolling, and button clicks for 50 seconds
        while ((Date.now() - start_time) / 1000 < 50) {
            // Track presence time
            let current_time = Date.now();
            presence_time = (current_time - start_time) / 1000;
            console.log(`Presence time: ${presence_time} seconds`);

            // Track scrolling
            let scroll_height = await driver.executeScript("return document.body.scrollHeight");
            let current_scroll = await driver.executeScript("return window.pageYOffset");
            console.log(`Scrolled ${current_scroll}/${scroll_height} pixels`);

            // Track clicks (uncomment if needed)
            
            // Wait for 2 seconds before checking metrics again
            await driver.sleep(2000);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close the WebDriver session
        await driver.quit();
    }
}

// Call the function to start tracking metrics
trackMetrics();
