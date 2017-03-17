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


import * as Reducer from "../../src/app/reducers/signin-reducer";
import * as ActionType from "../../src/app/constants/actionTypes";

describe("Reducer: SignIn Reducer", () => {

    it("LOGIN_REQUEST - sets isFetching prop to true", (done) => {

        let action = {
            type: ActionType.LOGIN_REQUEST
        };

        let newState = Reducer.signinInfo(undefined, action);
        expect(newState).to.have.property("isFetching", true);
        expect(newState).to.have.property("isAuthenticated", false);
        done();
    });

    it("LOGIN_SUCCESS - sets isFetching prop to false and isAuthenticated to true and id_token to token id", (done) => {
        let action = {
            type: ActionType.LOGIN_SUCCESS,
            payload: [{"id_token":"AJKHD&799asdHOIUIUOAOISJO"}]
        };

        let newState = Reducer.signinInfo(undefined, action);
        expect(newState).to.have.property("isFetching", false);
        expect(newState).to.have.property("isAuthenticated", true);
        expect(newState).to.have.property("id_token")
            .to.be.a("object");
        done();
    });

});