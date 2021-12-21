
describe('Smoke test', () => {
    it('Web driver title is correct', () => {
        browser.url('/')
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    })
})