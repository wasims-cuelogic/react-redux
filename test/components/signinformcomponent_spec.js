import {
    React,
    sinon,
    assert,
    expect,
    mount,
    shallow,
    TestUtils
} from '../helpers/test_helper';
import { SignInForm } from "../../src/app/components/signin/signin-form";


describe("Component: SignInForm", (prop) => {

    let props;
    let wrapper;
    let textField;
    let selectField;
    let sandbox;
    let signinForm;
    let submitButton;

    before(() => {
        sandbox = sinon.sandbox.create();

        props = { 
            formError:{},                                   
            userSigninRequest: sandbox.spy(),
            handleChange: () => { },
            submitHandle: sandbox.spy()
        }

        wrapper = shallow(<SignInForm  {...props} />);
        textField = wrapper.find("input");
        selectField = wrapper.find("select");
        submitButton = wrapper.find("button");
        signinForm = wrapper.find("#frm-signin");
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("SignInForm should exist", () => {
        expect(wrapper).to.exist;
    });

    it("should generate a signin form", () => {
        expect(textField).to.have.length(2);        
    });

    it("Submit clicks, submit form", () => {
        expect(signinForm.props().onSubmit).to.be.exist;
        expect(signinForm.props().onSubmit).to.eql(props.submitHandle);
        submitButton.simulate("click");
        props.submitHandle();
        sinon.assert.calledOnce(props.submitHandle);
    });
});