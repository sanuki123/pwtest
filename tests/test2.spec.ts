import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.yahoo.co.jp/');

  await page.getByLabel('天気・災害へ遷移する').click();

  await page.locator('#searchText').click();

  await page.locator('#searchText').fill('北海道');

  await page.locator('#yjw_button_search').click();

  await page.getByRole('link', { name: '北海道函館市' }).click();
  
  await page.screenshot({ path: `xxxx.png` })
});