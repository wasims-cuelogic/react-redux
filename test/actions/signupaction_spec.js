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

import thunk from "redux-thunk";
import proxyquire from "proxyquire";
import nock from "nock";

import * as actionTypes from "../../src/app/constants/actionTypes";

chai.should();
chai.use(sinonChai);

let stubs = {
    "Config": {
        "apiUrl": "http://localhost:3001/api",
        "@noCallThru": true
    }
}

let actionCreators = proxyquire("../../src/app/actions/signupActions", stubs);

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Test for Singup Action", () => {

    let headers;
    before(() => {
        headers = {
            "Content-Type": "application/json"
        }
    })

    describe("Add registration data to DB", () => {
        let userInfo;
        before(() => {
            userInfo = {
                "fname": "TestFname",
                "lname": "TestLname",
                "username": "TestUsername",
                "email": "Test@email.com",
                "password": "pass@123"
            }
        });

        it("returns a function", (done) => {
            let action = actionCreators.userSignupRequest(userInfo);
            expect(action).to.be.a("function");
            done();
        });

        it("Dispatches Action SIGNUP_PAGE_SUBMITTED and RECORD_ADD_SUCCESS", (done) => {

            const response = {
                "id_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU4YzdjOGMwNzQzMzY2NGE2MzIyN2IzNiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE0ODk0ODgzOTksImV4cCI6MTQ4OTQ5MTk5OX0.BsTpC56S9vm2uw5VB5d1TmGLn7A6GIoLmisqT-5q6zk"
            }

            nock("http://localhost:3000/api")
                .defaultReplyHeaders(headers)
                .post("/users/", JSON.stringify(userInfo))
                .reply(200, response);

            const expectedActions = [
                { type: actionTypes.SIGNUP_PAGE_SUBMITTED },
                { type: actionTypes.RECORD_ADD_SUCCESS, payload: [response.data] }
            ]


            const store = mockStore({});
            const dispatch = sinon.spy(store, 'dispatch');
            let obj = {
                get: () => {
                    return {};
                }
            }

            const getState = () => { return obj; };
            const fn = actionCreators.userSignupRequest(userInfo);

            fn(dispatch, getState, function () {
                dispatch.should.have.been.calledWith({ type: actionTypes.SIGNUP_PAGE_SUBMITTED });
                dispatch.should.have.been.calledWith({ type: actionTypes.RECORD_ADD_SUCCESS, payload: [response.data] });
                done();
            })
        })
    })

});