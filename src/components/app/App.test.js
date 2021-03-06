import Adapter from 'enzyme-adapter-react-16';
import App from './app';
import React from 'react';
import { configure, shallow } from 'enzyme';
import store from '../../store';
import { Provider } from 'react-redux';
import { initialState } from '../../reducers';
configure({ adapter: new Adapter() });

it('Instantiates and renders App', () => {
    const mockFunction = jest.fn();
    const component = shallow(<Provider store={store}>
        <App state={initialState}
            addTodo={mockFunction}
            todos={[]} />
    </Provider>);
    expect(component.exists()).toEqual(true);
});
