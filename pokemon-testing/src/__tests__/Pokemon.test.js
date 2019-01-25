import React from 'react';
import { mount } from 'enzyme';
import Pokemon from '../components/Pokemon';

describe('<Pokemon />', () => {
  const mockPokemon = {
    name: 'pikachu',
    id: '123',
  };

  const wrapper = mount(<Pokemon pokemon={mockPokemon} />);

  it('should return a <li/> element', () => {
    expect(wrapper.find('li').length).toBe(1);
  });

  it('should contain a <button/> and <p/> element', () => {
    expect(wrapper.exists('button')).toBe(true);
    expect(wrapper.exists('p')).toBe(true);
  });

  it('button should have correct background image', () => {
    const expected =
      'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png)';

    const button = wrapper.find('button');
    expect(button.props().style.backgroundImage).toBe(expected);
  });

  it('should display name of the pokemon', () => {
    expect(wrapper.find('p').text()).toBe(mockPokemon.name);
  });
});
