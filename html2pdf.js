const puppeteer = require('puppeteer')

async function printPDF(html) {
    const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf({ format: 'A4' });
  await browser.close();

  return pdf;
}
module.exports=printPDF;
process.on('exit', function(){

});
