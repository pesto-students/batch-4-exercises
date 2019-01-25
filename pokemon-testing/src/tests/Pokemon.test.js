
import React from 'react';
import { shallow } from 'enzyme';
import Pokemon from '../components/Pokemon';

describe('<Pokemon />', () => {
  const pokemonObject = {
    id: '123',
    name: 'Prakhar',
  };
  const pokemon = shallow(<Pokemon pokemon={pokemonObject} />);

  describe('should render the required elements', () => {
    test('should render a list element as the wrapping element', () => {
      const wrappingElement = pokemon;

      expect(wrappingElement.type()).toBe('li');
    });

    test('should render a button', () => {
      expect(pokemon.containsMatchingElement(<button />)).toBe(true);
    });

    test('should render a paragraph', () => {
      const hasAParagraph = Boolean(pokemon.find('p').length);

      expect(hasAParagraph).toBe(true);
    });
  });

  describe('uses Pokemon object correctly', () => {
    test('should render the correct name', () => {
      const pokemonName = pokemon.find('.pokemons__name').text();

      expect(pokemonName).toBe(pokemonObject.name);
    });

    test('should render the correct avatar', () => {
      const buttonWithPokemonAvatar = pokemon.find('button');
      const pokemonAvatar = `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonObject.id}.png)`;
      expect(buttonWithPokemonAvatar.props().style.backgroundImage).toBe(pokemonAvatar);
    });
  });
});
