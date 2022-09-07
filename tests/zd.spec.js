/*
 * @Descripttion: 
 * @version: 
 * @Author: qiuxchao
 * @Date: 2022-09-06 18:31:54
 * @LastEditors: qiuxchao
 * @LastEditTime: 2022-09-07 13:56:26
 */

const Cookie = 'p_h5_u=2274EE46-9AB2-4E7C-986A-1B3E1C24DA73;  XSD_SESSIONID=MTBiYTA4M2UtYTE2YS00YWJlLWFlNDMtN2Q5MzUzZjYyMTA3';
const Accept = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9';

const {
  chromium
} = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto('http://ols.v.zzu.edu.cn/xsd/');
  // await browser.close();
})();