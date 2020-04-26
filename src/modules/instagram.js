const puppeteer = require('puppeteer');

const BASE_URL = 'https://instagram.com';

const ig = {
    page: null,
    browser: null,

    async initialize() {
        console.warn('start > launching the browser');
        ig.browser = await puppeteer.launch({ headless: false });
        ig.page = await ig.browser.newPage();
    },

    async login(username, password) {
        try {
            console.warn('start > login');
            await ig.page.goto(`${BASE_URL}/accounts/login`, { waitUntil: 'networkidle2', timeout: 60000 });
            await ig.page.waitFor(2500);

            console.log('filling username name password');
            await ig.page.type("input[name='username']", username, { delay: 50 });
            await ig.page.type("input[name='password']", password, { delay: 70 });

            console.log('Login and wait for 10s');
            await ig.page.click("button[type='submit']");
            await ig.page.waitForNavigation();
            console.warn('finished > login');
        } catch (e) {
            console.error("Error occur while performing > Login");
            console.log({ error: e });
        }
    }
}

module.exports = ig;
