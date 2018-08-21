import Adapter from 'enzyme-adapter-react-16';
import AddToDo from './addtodo';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
configure({ adapter: new Adapter() });

describe('AddToDo component', () => {

    let component;
    const submitMock = jest.fn();

    beforeEach(() => {
        component = shallow(
            <AddToDo
                submit={submitMock}
            />,
        );
    });
    it('Instantiates component', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Should have input components', () => {
        expect(component.find('.todo-input-description').length).toEqual(1);
        expect(component.find('.todo-input-priority').length).toEqual(1);
        expect(component.find('.todo-input-tags').length).toEqual(1);
        expect(component.find('.todo-input-title').length).toEqual(1);
    });

    describe('Add todo button', () => {
        it('Should exist', () => {
            let todosubmitbutton = component.find('.todo-submit');
            expect(todosubmitbutton.length).toEqual(1);
            expect(todosubmitbutton.text()).toEqual('Add item');
            expect(todosubmitbutton.text()).not.toEqual('Input item'); // just testing this works
        });

        it('Should call the submit function when clicked', () => {
            component = mount(<AddToDo submit={submitMock} />);
            expect(submitMock.mock.calls.length).toEqual(0);
            component.find('form').simulate('submit');
            expect(submitMock.mock.calls.length).toEqual(1);
        });
    });
});