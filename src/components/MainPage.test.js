import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

it('render component', () => {
    expect(wrapper).toMatchSnapshot();
})

it('render component1', () => {
    expect(wrapper.instance().filtraRobots([])).toEqual([]);
})

it('render component2', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'Jack',
            email: 'jack@gmail.com'
        }],
        searchField: 'o',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filtraRobots([])).toEqual([]);
})