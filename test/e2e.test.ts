import {test,expect, beforeEach, afterEach} from 'vitest'
import puppeteer, { Browser } from "puppeteer";

let browser: Browser;
const BASE_URL = 'http://localhost:3000/';

beforeEach(async () => {
  browser = await puppeteer.launch({ headless: "new" });
});

afterEach(async () => {
  await browser.close();
});

test('goto index page is ok',async ()=>{
    const page = await browser.newPage();
    const url = BASE_URL
    await page.goto(url);
    const firstH2Element = await page.$('h2');
    expect(firstH2Element).toBeTruthy()
    const textContent = await page.evaluate(element => element?.textContent, firstH2Element);
    expect(textContent).toBe('Index Page')
    
})

test('goto index page2 is ok',async ()=>{
    const page = await browser.newPage();
    const url = `${BASE_URL}/page2`
    await page.goto(url);
    const firstH2Element = await page.$('h2');
    expect(firstH2Element).toBeTruthy()
    const textContent = await page.evaluate(element => element?.textContent, firstH2Element);
    expect(textContent).toBe('Page2')
    
})

test('goto index page3 is ok',async ()=>{
    const page = await browser.newPage();
    const url = `${BASE_URL}/page3`
    await page.goto(url);
    const firstH2Element = await page.$('h2');
    expect(firstH2Element).toBeTruthy()
    const textContent = await page.evaluate(element => element?.textContent, firstH2Element);
    expect(textContent).toBe('Page3')
    
})
