
import React from 'react';
import { shallow } from 'enzyme';
import Search from '../components/Search';

describe('<Search />', () => {
  const onChange = jest.fn();
  const search = shallow(<Search onChange={onChange} />);

  test('should render an input', () => {
    expect(search.type()).toBe('input');
  });

  test('should use the same onChange function as provided', () => {
    expect(search.props().onChange).toEqual(onChange);
  });
});
