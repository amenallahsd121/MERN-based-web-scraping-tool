const puppeteer = require('puppeteer');

const scrapeData = async () => {
    const url = 'https://www.dataroma.com/m/ins/ins.php?t=m&po=1&am=50000&sym=&o=fd&d=d';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const data = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('table tr'));
        return rows.slice(1).map(row => {
            const columns = row.querySelectorAll('td');
            return {
                manager: columns[0]?.innerText || '',
                value: columns[1]?.innerText || '',
            };
        });
    });

    await browser.close();
    return data;
};

module.exports = scrapeData;
