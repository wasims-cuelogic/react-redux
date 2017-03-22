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


import * as counterReducer from "../../src/app/reducers/counter-reducer";
import * as ActionType from "../../src/app/constants/actionTypes";
import { Map } from 'immutable';

//Used	for	testing	to	fire	actions	against	a	reducer.
function fireAction(reducer, currentState, type, payload = {}) {
    return reducer(currentState, {
        type,
        payload,
    });
}
let state = counterReducer.counterReducer(undefined, {});
describe('counter	reducer', () => {
    describe('inital	state', () => {
        it('should	be	a	Map', () => {
            assert.strictEqual(Map.isMap(state), true);
        });
    });
    describe('on	INCREMENT_COUNTER', () => {
        it('should	increment	state.count', () => {
            const previousValue = state.get('count');
            state = fireAction(counterReducer.counterReducer, state, INCREMENT_COUNTER);
            assert.strictEqual(state.get('count'), previousValue + 1);
        });
    });
    describe('on	DECREMENT_COUNTER', () => {
        it('should	decrement	state.count', () => {
            const previousValue = state.get('count');
            state = fireAction(counterReducer.counterReducer, state, DECREMENT_COUNTER);
            assert.strictEqual(state.get('count'), previousValue - 1);
        });
    });
});