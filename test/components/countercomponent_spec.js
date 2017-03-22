import {
    React,
    sinon,
    assert,
    expect,
    mount,
    shallow,
    TestUtils
} from '../helpers/test_helper';
import { render } from 'enzyme';
import { CounterComponent } from "../../src/app/components/counter-component";

describe('counter', () => {
    it('should	create	a	counter', () => {
        const wrapper = render(<CounterComponent counter={5} />);
        assert.isOk(wrapper.children().length,
            'Counter	not	found');
    });
    // it('should	respond	to	click	events', () => {
    //     const onIncrement = sinon.spy();
    //     const onDecrement = sinon.spy();
    //     const wrapper = shallow(
    //         <CounterComponent onIncrease={onIncrement} onIncrease={onDecrement} />
    //     );
    //     wrapper.find('[data-ref="incrementButton"]').simulate('click');
    //     assert.isTrue(onIncrement.calledOnce, 'increment	not	called');
    //     wrapper.find('[data-ref="decrementButton"]').simulate('click');
    //     assert.isTrue(onIncrement.calledOnce, 'decrement	not	called');
    // });
});