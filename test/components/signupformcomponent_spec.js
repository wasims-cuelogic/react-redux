import {
    React,
    sinon,
    assert,
    expect,
    mount, 
    shallow,
    TestUtils
} from '../helpers/test_helper';
import SignUpForm from "../../src/app/components/signup/signup-form";


describe("Component: SignUpForm", (prop) => {

    let props;
    let wrapper;
    let textField;
    let selectField;
    let sandbox;
    let signupForm;

    before(() => {
        sandbox = sinon.sandbox.create();

        props = {
            userSignupRequest: sandbox.spy()
        }

        wrapper = shallow(<SignUpForm  {...props} />);
        textField = wrapper.find("input");
        selectField = wrapper.find("select");
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

    // it("Submit clicks, submit form", () => {
    //     expect(signupForm.props().onSubmit).to.be.exist;
    //     expect(signupForm.props().onSubmit).to.eql(props.submitHandle);
    //     raisedButton.simulate("click");
    //     props.onSubmit();
    //     sinon.assert.calledOnce(props.onSubmit);
    // });
});