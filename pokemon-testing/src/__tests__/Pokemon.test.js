/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Pokemon from '../components/Pokemon';


describe('<Pokemon/> should render', () => {
  const pokemonProps = { pokemon: { id: 1, name: 'bulbasaur' } };
  it('should contain li as immediate child', () => {
    const shallowPokemon = shallow(<Pokemon {...pokemonProps} />);
    expect(shallowPokemon.find('li').length).toBe(1);
  });

  it('should display passed props name property pokemon name', () => {
    const shallowPokemon = shallow(<Pokemon {...pokemonProps} />);
    expect(shallowPokemon.find('.pokemons__name').text()).toBe(pokemonProps.pokemon.name);
  });

  it('should have background image url containing id of passed prop', () => {
    const shallowPokemon = shallow(<Pokemon {...pokemonProps} />);
    const spriteBackgroundUrl = `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonProps.pokemon.id}.png`})`;
    expect(shallowPokemon.find('.pokemons__sprite').props().style.backgroundImage)
      .toBe(spriteBackgroundUrl);
  });
});

