import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pokemon from '../components/Pokemon';
Enzyme.configure({ adapter: new Adapter() });


describe('<Pokemon /> ', () => {
    let wrapper;
    const pokemon = { name: 'pokemon', id: 3 }

    beforeEach(() => {
        wrapper = shallow(<Pokemon pokemon={pokemon} />);
    })

    afterEach(() => {
        wrapper = undefined;
    })

    it('should contain one li parent tag', () => {
        expect(wrapper.find('li').length).toBe(1);
    });

    it('should have correct background image for button', () => {
        let backgroundImage = `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`})`
        let buttonComponent = wrapper.find('button')
        expect(buttonComponent.props().style.backgroundImage).toEqual(backgroundImage);
    });

    it('should have correct pokemone name in the paragraph text', () => {
        let paragraphComponent = wrapper.find('p')
        expect(paragraphComponent.text()).toEqual(pokemon.name);
    });
})
