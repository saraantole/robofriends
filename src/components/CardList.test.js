import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('render component', () => {
    const mockRobots = [
        {
            name: 'John',
            id: 2,
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})