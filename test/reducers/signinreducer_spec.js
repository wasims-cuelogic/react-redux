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

    it("UNAUTH_USER - sets authenticated prop to false", (done) => {

        let action = {
            type: ActionType.UNAUTH_USER
        };

        let newState = Reducer.signinInfo(undefined, action);
        expect(newState).to.have.property("authenticated", false);
        done();
    });

    it("AUTH_USER - sets authenticated to true and id_token to token id", (done) => {
        let action = {
            type: ActionType.AUTH_USER,
            payload: [{
                "id_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU4Y2E0MGNkZDA2NDRkMjZjMzhmNzBiZSIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE0ODk5ODk5ODgsImV4cCI6MTQ4OTk5MzU4OH0.v2xvKoSIyHN5Y9pc8lnm2jVOMik8nB31PXmpiG3Dk9c",
                "user": {
                    "_id": "58ca40cdd0644d26c38f70be",
                    "password": "$2a$10$zMa/K0RJJXqMXJI7jFGUCua0p7auGkamKLuKViqnM0VVi3G5TXiWe",
                    "admin": false,
                    "username": "admin",
                    "email": "wasim.sayyed@cuelogic.com",
                    "lname": "Sayyed",
                    "fname": "Wasim",
                    "__v": 0,
                    "reg_time": "2017-03-16T07:37:49.943Z"
                }
            }]
        };

        let newState = Reducer.signinInfo(undefined, action);
        expect(newState).to.have.property("authenticated", true);
        expect(newState).to.have.property("token")
        expect(newState).to.have.property("user")
            .to.be.a("object");
        done();
    });
});