import React from 'react';
import { mount, shallow } from 'enzyme';
import Pokemon from '../../../src/components/Pokemon';

describe('<Pokemon />', () => {
  let props;
  const mountedPokemonComponent = mount(<Pokemon {...props} />);

  it('should always renders a li tag', () => {
    const liTags = mountedPokemonComponent.find('li');
    expect(liTags.length).toBeGreaterThan(0);
  });
  it('should always renders a button', () => {
    const buttonElements = mountedPokemonComponent.find('button');
    expect(buttonElements.length).toBe(1);
  });
  it('should always renders a p tag', () => {
    const pTags = mountedPokemonComponent.find('p');
    expect(pTags.length).toBe(1);
  });
  it('should receive one prop', () => {
    expect(Object.keys(mountedPokemonComponent.props()).length).toBe(1);
  });
});
