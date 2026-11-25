import { test, expect } from '@playwright/test';

test('амжилттай нэвтрэх', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Products')).toBeVisible();
});

test('амжилтгүй нэвтрэх', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_password');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Username and password do not match')).toBeVisible();
});

test('бараа сагслах', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByText('Logout').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});