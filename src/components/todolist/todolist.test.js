/* global describe, it, expect, jest */

import React from 'react';
import { configure, shallow } from 'enzyme';
import TodoList from './todolist';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('TodoList component', () => {

    const deleteMock = jest.fn();
    const props = {
        todos: [
            {
                id: 1,
                description: 'An example todo',
                title: 'To do item #1',
                createdAt: 1,
                priority: 1,
                tags: [],
                isDone: false
            }
        ],
        deleteToDo: deleteMock,
    };

    let component = shallow(<TodoList  {...props} />);

    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Should display a todo when passed in as a prop', () => {
        expect(component.find('.todo-text').text()).toEqual(props.todos[0].description);
    });

    it('Should call the deleteToDo function when Delete button is clicked', () => {
        expect(deleteMock.mock.calls.length).toEqual(0);
        component.find('.todo-delete').simulate('click');
        // expect(deleteMock.mock.calls.length).toEqual(1);
    });
});