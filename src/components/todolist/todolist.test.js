import React from 'react';
import { configure, shallow } from 'enzyme';
import TodoList from './todolist';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('TodoList component', () => {

    const deleteTodoMock = jest.fn();
    const toggleDoneMock = jest.fn();
    const props = {
        todos: [
            {
                id: 1,
                description: 'An example todo',
                title: 'To do item #1',
                createdAt: 10000,
                priority: 1,
                tags: [],
                isDone: false
            }
        ],
        deleteTodo: deleteTodoMock,
        toggleDone: toggleDoneMock,
    };

    let component = shallow(<TodoList {...props} />);

    it('Renders component', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Display a todo', () => {
        expect(component.find('.todo-text').text()).toEqual(props.todos[0].description);
    });

    // it('Call the delete function when delete icon clicked', () => {
    //     expect(deleteTodoMock.mock.calls.length).toEqual(0);
    //     component.find('.todo-delete').simulate('click');
    //     expect(deleteTodoMock.mock.calls.length).toEqual(1);
    // });

    it('Call the toggleDone function when mark as read icon clicked', () => {
        expect(toggleDoneMock.mock.calls.length).toEqual(0);
        component.find('.todo-markasdone').simulate('click');
        expect(toggleDoneMock.mock.calls.length).toEqual(1);
    });
});