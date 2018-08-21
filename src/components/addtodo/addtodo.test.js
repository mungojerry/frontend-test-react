
/* global expect, it, describe, jest, beforeEach  */

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
                submitToDo={submitMock}
            />,
        );
    });
    it('Instantiates component', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Should have a single input component', () => {
        expect(component.find('.todo-input').length).toEqual(1);
    });

    describe('Add todo button', () => {
        it('Should exist', () => {
            expect(component.find('.todo-submit').length).toEqual(1);
            expect(component.find('.todo-submit').text()).toEqual('Add item');
            expect(component.find('.todo-submit').text()).not.toEqual('Input item'); // just testing this works
        });

        it('Should call the submitToDo function when clicked', () => {
            component = mount(<AddToDo submitToDo={submitMock} />);

            expect(submitMock.mock.calls.length).toEqual(0);
            component.find('form').simulate('submit');
            expect(submitMock.mock.calls.length).toEqual(1);
        });
    });
});