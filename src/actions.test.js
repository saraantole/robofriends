import * as actions from './actions';
import * as types from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {
    it('should create a CHANGE_SEARCH_FIELD action', () => {
        const text = 'wooo';
        const expectedAction = {
            type: types.CHANGE_SEARCH_FIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
})

describe('Fetch robots action PENDING', () => {
    it('handle requesting robots API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots())
        const action = store.getActions()
        expect(action[0]).toEqual({type: "REQUEST_ROBOTS_PENDING"});
    })
})