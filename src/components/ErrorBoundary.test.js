import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

it ('render component', () => {
    expect (shallow(<ErrorBoundary/>)).toMatchSnapshot();
})