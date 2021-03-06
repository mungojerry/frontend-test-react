
import { reducer, initialState } from './';

describe('Reducer', () => {
    it('Should return the initial state when no action passed', () => {
        expect(reducer(undefined, [], 'ADD')).toEqual(initialState);
    });
    describe('Submit todo', () => {
        it('Should return the correct state', () => {
            let dateCreated = Date.now();
            let tags = ['Test tag 1', 'Test tag 2'];
            const action = {
                type: 'ADD',
                id: 1,
                description: 'Test to do item',
                createdAt: dateCreated,
                title: 'Test to do item title',
                priority: 1,
                tags: tags,
                isDone: false
            };

            const expectedState = {
                todos: [
                    {
                        id: 1,
                        description: 'Test to do item',
                        createdAt: dateCreated,
                        title: 'Test to do item title',
                        priority: 1,
                        tags: tags,
                        isDone: false
                    },
                ],
            };

            expect(reducer(undefined, action)).toEqual(expectedState);
        });
    });
    describe('Delete todo', () => {
        it('Should return the correct state on delete', () => {
            let dateCreated = Date.now();
            let tags = ['Test tag 1', 'Test tag 2'];
            const startingState = {
                todos: [
                    {
                        id: 1,
                        description: 'Test to do item',
                        createdAt: dateCreated,
                        title: 'Test to do item title',
                        priority: 1,
                        tags: tags,
                        isDone: false
                    },
                ],
            };

            const action = {
                type: 'DELETE',
                id: 1,
            };

            const expectedState = {
                todos: [],
            };

            expect(reducer(startingState, action)).toEqual(expectedState);
        });
    });
    describe('Mark as done todo', () => {
        it('Should return the correct state on mark as done', () => {
            let dateCreated = Date.now();
            let tags = ['Test tag 1', 'Test tag 2'];
            const startingState = {
                todos: [
                    {
                        id: 1,
                        description: 'Test to do item',
                        createdAt: dateCreated,
                        title: 'Test to do item title',
                        priority: 1,
                        tags: tags,
                        isDone: false
                    },
                ],
            };

            const action = {
                type: 'TOGGLEDONE',
                id: 1,
            };

            const expectedState = {
                todos: [
                    {
                        id: 1,
                        description: 'Test to do item',
                        createdAt: dateCreated,
                        title: 'Test to do item title',
                        priority: 1,
                        tags: tags,
                        isDone: true
                    },
                ],
            };

            expect(reducer(startingState, action)).toEqual(expectedState);
        });
    });
});