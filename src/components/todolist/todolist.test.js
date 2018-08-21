import React from 'react';
import { configure, shallow } from 'enzyme';
import TodoList from './todolist';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('TodoList component', () => {

    const deleteMock = jest.fn();
    const markAsDoneMock = jest.fn();
    const props = {
        todos: [
            {
                id: 1,
                description: 'An example todo',
                title: 'To do item #1',
                created: 10000,
                priority: 1,
                tags: [],
                isDone: false
            }
        ],
        delete: deleteMock,
        markAsDone: markAsDoneMock,
    };

    let component = shallow(<TodoList  {...props} />);

    it('Renders component', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Display a todo', () => {
        expect(component.find('.todo-text').text()).toEqual(props.todos[0].description);
    });

    it('Call the delete function when delete icon clicked', () => {
        expect(deleteMock.mock.calls.length).toEqual(0);
        component.find('.todo-delete').simulate('click');
        expect(deleteMock.mock.calls.length).toEqual(1);
    });

    it('Call the markAsDone function when mark as read icon clicked', () => {
        expect(markAsDoneMock.mock.calls.length).toEqual(0);
        component.find('.todo-markasdone').simulate('click');
        expect(markAsDoneMock.mock.calls.length).toEqual(1);
    });
});