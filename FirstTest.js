const puppeteer = require('puppeteer');
const tesseract = require("node-tesseract-ocr")

async function BypassCaptha() {

    var animalName = "walya"
    var problemSolution = '12'

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--disable-notifications"]
    });

    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(100000)

    try {
        await page.goto('https://sandbox.dereuromark.de/sandbox/captchas/math', {waitUntil: 'networkidle2', waitUntil: 'load'});    
        await page.waitForSelector("#name");
        await page.type("#name", animalName,   { delay: 300 });
        await page.waitFor(3000)
        await page.$eval('#captcha-id', element => element.value = '28699');
        await page.waitFor(3000)
        await page.$eval('img', element => element.src = 'https://sandbox.dereuromark.de/captcha/captcha/display/28699.png');
        await page.waitFor(3000)
        await page.type("#captcha-result", problemSolution, { delay: 300 });
        await page.click('.btn.btn-secondary');
        await page.waitForNavigation();
        await page.screenshot({path: 'captha.png'})
        console.log("Bypassing succesfull ... ");
    } catch (error) {
        console.log(error);
    }

}

BypassCaptha()