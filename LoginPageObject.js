import Page from './page'

class loginPO extends Page {
    open() {
        browser.url('/');
    }
    providecredentials() {
        $('#user_email').setValue('myemail@example.com')
        $('#user_password').setValue('mypassword')
    }
    clickLogin() {
        $('input[value="Login"]').click()
    }
}

    export default new loginPO();