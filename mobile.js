const {webkit, chromium, firefox, devices} = require('playwright');

(async () => {
		const browser = await chromium.launch({
			headless: false,
		});
		const context = await browser.newContext({
			geolocation: {
				latitude: 51.5080703,
				longitude: -0.0993819,
			},
			permissions: ['geolocation'],
			locale: 'de-DE',
			colorScheme: 'dark',			
		});
		const page = await context.newPage();
		await page.goto('https://overreacted.io');
		await page.waitForTimeout(1000);
		await page.emulateMedia({
			colorScheme: 'light',
		})
})();


