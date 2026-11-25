// Playwright-ийн test болон expect хэрэгслүүдийг импортлох
import { test, expect } from '@playwright/test';

// Тест 1: зөв нэр, нууц үгээр амжилттай нэвтэрч, logout хийх
test('амжилттай нэвтрэх', async ({ page }) => {
  // Saucedemo сайтыг нээнэ
  await page.goto('https://www.saucedemo.com');
  // Username талбарыг placeholder-аар нь олж бөглөнө
  await page.getByPlaceholder('Username').fill('standard_user');
  // Password талбарыг placeholder-аар нь олж бөглөнө
  await page.getByPlaceholder('Password').fill('secret_sauce');
  // Login товчийг role болон нэрээр нь олж дарна
  await page.getByRole('button', { name: 'Login' }).click();
  // Нэвтэрсний дараа "Products" гарчиг харагдаж буйг шалгана
  await expect(page.getByText('Products')).toBeVisible();
  // Цэсийг нээнэ
  await page.getByRole('button', { name: 'Open Menu' }).click();
  // Logout хийж тестийг төгсгөнө
  await page.getByText('Logout').click();
});

// Тест 2 (сөрөг тест): буруу нууц үгээр нэвтрэхэд алдааны мессеж гарч буйг шалгах
test('амжилтгүй нэвтрэх', async ({ page }) => {
  // Saucedemo сайтыг нээнэ
  await page.goto('https://www.saucedemo.com');
  // Зөв username бөглөнө
  await page.getByPlaceholder('Username').fill('standard_user');
  // Буруу password бөглөнө
  await page.getByPlaceholder('Password').fill('wrong_password');
  // Login товчийг дарна
  await page.getByRole('button', { name: 'Login' }).click();
  // Алдааны мессеж харагдаж буйг шалгана
  await expect(page.getByText('Username and password do not match')).toBeVisible();
});

// Тест 3: нэвтэрсний дараа бараа сагсанд хийж, logout хийх
test('бараа сагслах', async ({ page }) => {
  // Saucedemo сайтыг нээнэ
  await page.goto('https://www.saucedemo.com');
  // Username бөглөнө
  await page.getByPlaceholder('Username').fill('standard_user');
  // Password бөглөнө
  await page.getByPlaceholder('Password').fill('secret_sauce');
  // Login товчийг дарна
  await page.getByRole('button', { name: 'Login' }).click();
  // Эхний барааны "Add to cart" товчийг дарна
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  // Сагсны тэмдэг дээр 1 гэж харагдаж буйг шалгана
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  // Цэсийг нээнэ
  await page.getByRole('button', { name: 'Open Menu' }).click();
  // Logout хийнэ
  await page.getByText('Logout').click();
  // Нэвтрэх хуудас руу буцсаныг URL-аар шалгана
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});