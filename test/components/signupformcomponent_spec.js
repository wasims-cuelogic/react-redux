import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";
import SignUpForm from "../../src/app/components/signup/signup-form";


describe("Component: SignUpForm", (prop) => {

    let props;
    let wrapper;
    let textField;
    let selectField;
    let sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();

        props = {
            userSignupRequest: sandbox.spy()
        }

        wrapper = shallow(<SignUpForm  {...props} />);
        textField = wrapper.find("input");
        selectField = wrapper.find("select");
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("SignUpForm should exist", () => {
        expect(wrapper).to.exist;
    });

    it("should generate a signup form", () => {
        expect(textField).to.have.length(4);
        expect(selectField).to.have.length(1);
    })
});