import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from 'redux-mock-store';
import { expect } from "chai";
import { User } from "../../src/app/components/User";


const mockStore = configureStore();

describe("Component: User", (prop) => {

    let props;
    let wrapper;
    let userList;
    let userDetails;

    before(() => {
        wrapper = shallow(<User {...props} />);
        userList = wrapper.find("UserList");
        userDetails = wrapper.find("UserDetail");
    });

    it("User component should exist", () => {
        expect(wrapper).to.exist;
    });
});