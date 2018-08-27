import MockAxios from 'axios-mock-adapter';
import Axios from "axios";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const todoText = 'A todo';
const mockAxios = new MockAxios(Axios, { delayResponse: Math.random() * 400 });
describe('Actions', () => {

    let createdAt = Date.now();

    it('Should create an action to add a todo', () => {
        const expectedAction = {
            type: 'ADD',
            id: 1,
            description: todoText,
            title: 'To do item #1',
            createdAt: createdAt,
            priority: 1,
            tags: [],
            isDone: false
        };

        expect(actions.addTodo(todoText, 1, 'To do item #1', [], createdAt)).toEqual(expectedAction);
    });

    it('Should create an action to mark a todo as done', () => {
        const expectedAction = {
            type: 'TOGGLEDONE',
            id: 1,
            isDone: true
        };

        expect(actions.toggleDone(1)).toEqual(expectedAction);
    });

    it('Should create an action to delete a todo', () => {
        const expectedAction = {
            type: 'DELETE',
            id: 1,
        };
        expect(actions.deleteTodo(1)).toEqual(expectedAction);
    });

    it('Should get todos', () => {
        const expectedAction = [{
            type: 'ADD',
            id: 1,
            description: todoText,
            title: 'To do item #1',
            createdAt: createdAt,
            priority: 1,
            tags: [],
            isDone: false
        }];
        expect(actions.getTodos()).toEqual(expectedAction);
    });

});