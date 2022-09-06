/*
 * @Descripttion: 
 * @version: 
 * @Author: qiuxchao
 * @Date: 2022-09-06 10:13:39
 * @LastEditors: qiuxchao
 * @LastEditTime: 2022-09-06 11:02:59
 */
import { test, expect } from '@playwright/test';

test('在百度中搜索Playwright', async ({ page }) => {
  // 打开百度搜索页面
  await page.goto('https://www.baidu.com/');
  
  // 查看标题中是否有「百度一下，你就知道」文案
  await expect(page).toHaveTitle(/百度一下，你就知道/);

  // 找到搜索框元素并输入「Playwright」
  await page.locator('input#kw').fill('Playwright');

  // 找到「百度一下」按钮并点击
  await page.locator('input[value=百度一下]').click();

  // 找到结果列表中第一条 这里使用的 Xpath
  const result = await page.locator('/html/body/div[2]/div[3]/div[1]/div[3]/div[1]/div[3]/a/span');
  
  // 验证第一条是不是官方地址
  expect(result).toHaveText('https://github.com/microsoft/playwright');
});