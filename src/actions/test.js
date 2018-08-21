/* global expect, it, describe */

import actions from '.';

describe('Actions', () => {
    const todoText = 'A todo';

    it('Should create an action to add a todo', () => {
        const expectedAction = {
            type: 'SUBMIT',
            id: 1,
            description: todoText,
            title: 'To do item #1',
            createdAt: Date.now(),
            priority: 1,
            tags: [],
            isDone: false
        };

        expect(actions.submitToDo(todoText)).toEqual(expectedAction);
    });

    it('Should create an action to delete a todo', () => {
        const expectedAction = {
            type: 'DELETE',
            id: 1,
        };

        expect(actions.deleteToDo(1)).toEqual(expectedAction);
    });
});