<h2>Motivation</h2>
How to test navigation between pages in next.js using puppeteer

<h2>Questions</h2>
<ul>
<li>use beforeAll\afterAll or beforeEach\afterEach for puppeteer --> using before pros : has better test isolation because new browser is used and the starting state is the same for all test. cons : slower and more resources are used. bottom line, using before looks better because the tests are isolated</li>
<li>do i need to open the brwoser before the test --> no but the next.js app must be invoked using e.g. npm run dev</li>
<li>how to test middleware with navigation --> no need for Page.waitForNavigation() </li>
<li>do i need to click button for navigation or navigate with url --> no</li>
</ul>