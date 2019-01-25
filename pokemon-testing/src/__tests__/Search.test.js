import React from 'react';
import { shallow } from 'enzyme';
import Search from '../components/Search';

describe('<Search/> is properly renderd', () => {
  //const mockFunction = jest.fn();
  const searchProps = { onChange: jest.fn() };
  it('should have an input with type text', () => {
    const shallowSearch = shallow(<Search {...searchProps} />);
    expect(shallowSearch.find('input').props().type).toBe('text');
  });

  it('should have a placeholder with appropriate text', () => {
    const shallowSearch = shallow(<Search {...searchProps} />);
    expect(shallowSearch.find('input').props().placeholder).toBe('Enter pokemon name...');
  });

  it('should call onchange call back on change', () => {
    const shallowSearch = shallow(<Search {...searchProps} />);
    shallowSearch.find('input').simulate('change');
    expect(shallowSearch.find('input').props().onChange).toBeDefined();
  });
});
