describe('Funnel registration', () => {
    it('First/last name registration', function () {
        browser.url('/ivanqa_test')
        // expect(browser).toHaveTitle('Registration - ZARA Ukraine - Official Website');
        const registrationForm = $('#formWrapper1');
        registrationForm.$('input[name="first_name"]').setValue('webdriverIO');
        registrationForm.$('input[name="last_name"]').setValue('webdriverIO');
        const email = `test${new Date().getTime() / 1000}@test.com`
        const thankYouPopUPText = "¡Gracias por registrarse!"
        const pop_up = $('.nrp__block')
        registrationForm.$('input[name="user_email"]').setValue(email);
        registrationForm.$('input[name="phone_num"]').setValue('565656537');
        registrationForm.$('button[id="lead-form-submit"]').click();
        pop_up.waitForDisplayed();
        expect(pop_up).toHaveTextContaining(thankYouPopUPText)

    });
})