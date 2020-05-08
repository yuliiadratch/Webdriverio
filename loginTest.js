import loginPO from '../classes/loginPO';
const Login = new loginPO();
let message = '#flashnotice-body';

describe("Create, edit, delete the key pair", function() {
    it ('Login', () => {
        Login.open();
        Login.providecredentials();
        Login.clickLogin();
        Login.getMessage(message)
        expect(message).toHaveText('Signed in successfully.')

    })
})