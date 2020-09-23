import { shallow } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

it ('render component', () => {
    expect (shallow(<Scroll/>)).toMatchSnapshot();
})