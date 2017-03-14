import {
    React,
    sinon,
    assert,
    expect,
    mount,
    shallow,
    TestUtils,
    configureStore,
    sinonChai,
    chai
} from '../helpers/test_helper';


import * as Reducer from "../../src/app/reducers/signup-reducer";
import * as ActionType from "../../src/app/constants/actionTypes";

describe("Reducer: SignUp Reducer", () => {

    it("SIGNUP_PAGE_SUBMITTED - sets isLoading prop to true", (done) => {

        let action = {
            type: ActionType.SIGNUP_PAGE_SUBMITTED
        };

        let newState = Reducer.signupInfo(undefined, action);
        expect(newState).to.have.property("isLoading", true);
        expect(newState).to.have.property("isPropUpdate", false);
        done();
    });

    it("RECORD_ADD_SUCCESS - sets recordAdded prop to false and sets info to array", (done) => {
        let action = {
            type: ActionType.RECORD_ADD_SUCCESS,
            payload: [{}]
        };

        let newState = Reducer.signupInfo(undefined, action);
        expect(newState).to.have.property("isLoading", false);
        expect(newState).to.have.property("isPropUpdate", false);
        expect(newState).to.have.property("info")
            .to.be.a("array");
        done();
    });

});