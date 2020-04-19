import puppeteer from 'puppeteer';

export const BASE_URL = 'https://instagram.com';

class Instagram {

    constructor() {
        this.page = null;
        this.browser = null;
    }

    initialize = async () => {
        this.browser = puppeteer.launch({
            headless: false
        });
        this.page = (await this.browser).newPage();
        await (await this.page).goto(BASE_URL, { waitUntil: 'networkidle2' });
    }
}

export default new Instagram();
