import {
    React,
    sinon,
    assert,
    expect,
    mount,
    shallow,
    TestUtils
} from '../helpers/test_helper';

import SignInForm from "../../src/app/components/signin/signin-form";

describe('Component: SignInForm', () => {
    let data = {
        form: {
            formAttrs: {
                email: {
                    label: "Email",
                    type: "email",
                    value: "foo@bar.com",
                    validation: "value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/i)",
                    errorMessage: "A valid email address is required"
                },
                password: {
                    label: "Password",
                    type: "password",
                    value: "foobar",
                    validation: "value.length > 0 && value.length < 73",
                    errorMessage: "Password must be between 1 and 72 characters long"
                }
            }
        }        

    }

    var sandbox, loginForm, inputs, button;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        loginForm = TestUtils.renderIntoDocument(<SignInForm {...data} />);
        inputs = TestUtils.scryRenderedDOMComponentsWithTag(loginForm, 'input');
        button = TestUtils.findRenderedDOMComponentWithTag(loginForm, 'button');
    });

    afterEach(() => {
        sandbox.restore()
    });

    it('should generate a login form', () => {
        expect(inputs.length).to.equal(2);
        expect(button).to.not.equal(null);
    });    

    // it('should handle the click event', () => {
    //     // create a method stub using sinon. So, we can verify it later on.
    //     const clickMe = sinon.stub();
    //     // shallow render our button component.
    //     const wrapper = shallow(<Button onClick={clickMe}>ClickMe</Button>);

    //     // use enzyme to simulate a button click.
    //     wrapper.find('button').simulate('click');

    //     // assert whether the onClick stub has been called or not.
    //     expect(clickMe.callCount).to.be.equal(1);
    // });
});