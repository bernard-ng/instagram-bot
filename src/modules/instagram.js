const puppeteer = require('puppeteer');

const BASE_URL = 'https://instagram.com';

const ig = {
    page: null,
    browser: null,

    async initialize() {
        ig.browser = await puppeteer.launch({ headless: false });
        ig.page = await ig.browser.newPage();
    },

    async login(username, password) {
        await ig.page.goto(BASE_URL, { waitUntil: 'networkidle2' });
        const loginButton = ig.page.$x("//a[contains(text(), 'Log In')]");

        console.log({ loginButton });
    }
}

module.exports = ig;
