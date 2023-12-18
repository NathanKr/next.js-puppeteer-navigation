import { test, expect, beforeEach, afterEach } from "vitest";
import puppeteer, { Browser } from "puppeteer";

let browser: Browser;
const BASE_URL = "http://localhost:3000/";

beforeEach(async () => {
  browser = await puppeteer.launch({ headless: "new" });
});

afterEach(async () => {
  await browser.close();
});

test("goto index page is ok", async () => {
  const page = await browser.newPage();
  const url = BASE_URL;
  await page.goto(url);
  const firstH2Element = await page.$("h2");
  expect(firstH2Element).toBeTruthy();
  const textContent = await page.evaluate(
    (element) => element?.textContent,
    firstH2Element
  );
  expect(textContent).toBe("Index Page");
});

test("goto index page2 is ok", async () => {
  const page = await browser.newPage();
  const url = `${BASE_URL}/page2`;
  await page.goto(url);
  const firstH2Element = await page.$("h2");
  expect(firstH2Element).toBeTruthy();
  const textContent = await page.evaluate(
    (element) => element?.textContent,
    firstH2Element
  );
  expect(textContent).toBe("Page2");
});

test("goto index page3 is ok", async () => {
  const page = await browser.newPage();
  const url = `${BASE_URL}/page3`;
  await page.goto(url);
  const firstH2Element = await page.$("h2");
  expect(firstH2Element).toBeTruthy();
  const textContent = await page.evaluate(
    (element) => element?.textContent,
    firstH2Element
  );
  expect(textContent).toBe("Page3");
});

test("click from home page on page2 link navigate to page page2 ", async () => {
  const page = await browser.newPage();
  const url = `${BASE_URL}`;
  await page.goto(url); // -- start from home page

  // Click on the "Page2" link
  await page.click('a[href="/page2"]');

  // Wait for the navigation to complete
  await page.waitForNavigation();

  // Check that the page content matches the expected content of Page2
  const pageTitle = await page.$eval('h2', element => element.textContent);
    expect(pageTitle).toBe('Page2')
});

test("click from home page on page3 link navigate to page page3 ", async () => {
    const page = await browser.newPage();
    const url = `${BASE_URL}`;
    await page.goto(url); // -- start from home page
  
    // Click on the "Page3" link
    await page.click('a[href="/page3"]');
  
    // Wait for the navigation to complete
    await page.waitForNavigation();
  
    // Check that the page content matches the expected content of Page3
    const pageTitle = await page.$eval('h2', element => element.textContent);
      expect(pageTitle).toBe('Page3')
  });
  