import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';



export const selectTodos = (state: RootState) => state.todos.todos;
export const selectCurrentFilter = (state: RootState) => state.filter.filter;
export const selectLoading = (state: RootState) => state.todos.loading;


export const selectFilteredTasks = createSelector(
    [selectTodos, selectCurrentFilter],
    (todos, filter) => {
        switch (filter) {
            case 'all':
                return todos;
            case 'completed':
                return todos.filter(todo => todo.isdone);
            
            default:
                return todos;
        }
    }
);
