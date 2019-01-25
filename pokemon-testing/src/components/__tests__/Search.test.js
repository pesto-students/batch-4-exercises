import React from 'react';
import { mount } from 'enzyme';
import Search from '../components/Search';

describe('<Search />', () => {
  const onChange = jest.fn();
  const wrapper = mount(<Search onChange={onChange} />);

  it('should render and `<input /> of type text`', () => {
    expect(wrapper.exists('input')).toBe(true);
    expect(wrapper.find('input').props().type).toBe('text');
  });

  it('rendered <input/> should have a placeholder', () => {
    const input = wrapper.find('input');
    expect(input.props().placeholder).toBeTruthy();
    expect(typeof input.props().placeholder).toBe('string');
  });

  it('should call `onChange` when input is changed', () => {
    const input = wrapper.find('input');
    input.simulate('change', { currentTarget: { value: 'pikachu' } });
    expect(onChange).toHaveBeenCalled();
  });
});
