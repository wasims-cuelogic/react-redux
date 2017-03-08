import {
    React,
    sinon,
    assert,
    expect,
    mount, 
    shallow,
    TestUtils,
    configureStore
} from '../helpers/test_helper';

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