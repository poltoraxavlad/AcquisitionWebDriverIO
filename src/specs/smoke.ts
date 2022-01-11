describe.skip('Smoke src', () => {
    it('Web driver title is correct', () => {
        browser.url('/')
        expect(browser).toHaveTitle('Contato');
    })
})