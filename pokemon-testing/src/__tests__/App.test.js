import React from 'react';
import { shallow, mount } from 'enzyme';
import Page from '../containers/Page/Page';
import Search from '../components/Search';
import Pokemon from '../components/Pokemon';

describe('<Page /> shallow rendering', () => {
  const pageProps = {
    page: { displayedPokemons: ['pikachu'], isFetching: false },
    pageActions: { fetchPokemons: () => {} },
  };
  const getPage = (props) => {
    return shallow(<Page {...props} />);
  };
  it('should render main div with class .pokemons__wrapper', () => {
    const wrapper = getPage(pageProps);
    expect(wrapper.closest('div').exists('.pokemons__wrapper')).toEqual(true);
  });

  it('should have <Search /> Component', () => {
    expect(getPage(pageProps)
      .closest('div')
      .find(Search).length).toBe(1);
  });

  it('should list <Pokemon /> components after fetching', () => {
    const newPageProps = { ...pageProps, page: { ...pageProps.page, isFetching: false } };
    const wrapper = getPage(newPageProps);
    expect(wrapper.find(Pokemon).length).not.toBe(0);
  });
});
