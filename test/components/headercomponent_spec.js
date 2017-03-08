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
import { Header } from "../../src/app/components/Header";

describe("Component: Header", () => {

    const wrapper = shallow(<Header />);

    it('renders as a <nav>', () => {
        expect(wrapper.type()).to.eql('nav');
    });    

    it('contains a header explaining the app', () => {
        expect(wrapper.find('.container-fluid')).to.have.length(1);
    });
});