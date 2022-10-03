const playwright = require('playwright');

(async () => {
  const browser = await playwright.firefox.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.leboncoin.fr/recherche?locations=Paris__48.8495376581948_2.340572835508209_8691');
  await page.waitForSelector("div.geetest_radar_tip")
  await page.hover('div.geetest_radar_tip')
  await page.waitForSelector("div.geetest_radar_tip")
  await page.click('div.geetest_radar_tip', delay=5000)

  
})();