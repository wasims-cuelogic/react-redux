import {
    React,
    sinon,
    assert,
    expect,
    mount,
    shallow,
    TestUtils
} from '../helpers/test_helper';
import { SignUpForm } from "../../src/app/components/signup/signup-form";


describe("Component: SignUpForm", (prop) => {

    let props;
    let wrapper;
    let textField;
    let selectField;
    let sandbox;
    let signupForm;
    let submitButton;

    before(() => {
        sandbox = sinon.sandbox.create();

        props = {
            formError: {},
            isLoading: true,
            recordAdded: false,
            userSignupRequest: sandbox.spy(),
            handleChange: () => { },
            submitHandle: sandbox.spy()
        }

        wrapper = shallow(<SignUpForm  {...props} />);
        textField = wrapper.find("TextFieldGroup");
        selectField = wrapper.find("select");
        submitButton = wrapper.find("button");
        signupForm = wrapper.find("#frm-signup");
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("SignUpForm should exist", () => {
        expect(wrapper).to.exist;
    });

    it("should generate a signup form", () => {
        expect(textField).to.have.length(6);
        expect(selectField).to.have.length(1);
    });

    it("Submit clicks, submit form", () => {
        expect(signupForm.props().onSubmit).to.be.exist;
        expect(signupForm.props().onSubmit).to.eql(props.submitHandle);
        submitButton.simulate("click");
        props.submitHandle();
        sinon.assert.calledOnce(props.submitHandle);
    });
});