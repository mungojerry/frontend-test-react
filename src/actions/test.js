/* global expect, it, describe */

import actions from '.';

describe('Actions', () => {
    const todoText = 'A todo';

    let createdAt = Date.now();

    it('Should create an action to add a todo', () => {
        const expectedAction = {
            type: 'SUBMIT',
            id: 1,
            description: todoText,
            title: 'To do item #1',
            createdAt: createdAt,
            priority: 1,
            tags: [],
            isDone: false
        };

        expect(actions.submitToDo(todoText, createdAt)).toEqual(expectedAction);
    });

    it('Should create an action to mark a todo as done', () => {
        const expectedAction = {
            type: 'MARKASDONE',
            id: 1,
            isDone: true
        };

        expect(actions.markAsDone(1)).toEqual(expectedAction);
    });

    it('Should create an action to delete a todo', () => {
        const expectedAction = {
            type: 'DELETE',
            id: 1,
        };
        expect(actions.deleteToDo(1)).toEqual(expectedAction);
    });
});