import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../components/Search';

configure({ adapter: new Adapter });

describe('<Search /> ', () => {
    let wrapper;
    const functionAsProp = () => { };
    beforeEach(() => {
        wrapper = shallow(<Search onChange={functionAsProp} />);
    })

    afterEach(() => {
        wrapper = undefined;
    })

    it('should contain one input tag', () => {
        expect(wrapper.find('input').length).toBe(1);
    });

    it('should have a input with prop as given onChange callback ', () => {
        const inputComponent = wrapper.find('input');
        expect(inputComponent.props().onChange).toEqual(functionAsProp);
        expect(inputComponent.props().placeholder).toBe('Enter pokemon name...')
    })
})
