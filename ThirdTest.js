const puppeteer = require('puppeteer');

async function BypassCaptha() {

    var ProductName = []
    var prices = []

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--disable-notifications"]
    });

    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(100000)
        await page.goto('https://www.leboncoin.fr/recherche?locations=Paris__48.8495376581948_2.340572835508209_8691', {waitUntil: 'networkidle2', waitUntil: 'load'});    
        await page.waitForSelector(".sc-bdVaJa.dbnPvT");
        try {
            let price_selector= "._137P-._35DXM.P4PEa"; 
            let price_length = await page.evaluate((sel) => {
                let elements = Array.from(document.querySelectorAll(sel));
                return elements.length;
            }, price_selector);
            for(let i=0; i< price_length; i++){
                var price = await page.evaluate((l, sel) => {
                            let elements= Array.from(document.querySelectorAll(sel))
                            let anchor  = elements[l]
                            if(anchor){
                                return anchor.innerText;
                            }else{
                                return 'empty';
                            }
                        }, i, price_selector);

                prices.push(price)
            }
            console.log(prices); 
        } catch (error) {
            console.log(error);
        }
    

}

BypassCaptha()