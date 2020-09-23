import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it ('render component', () => {
    expect (shallow(<SearchBox/>)).toMatchSnapshot();
})