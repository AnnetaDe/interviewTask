import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectCurrentFilter = (state: RootState) => state.filter.filter;
export const selectLoading = (state: RootState) => state.todos.loading;
export const selectColumns= (state: RootState) => state.todos.columns;

export const selectFilteredTasks = createSelector(
    [selectTodos, selectCurrentFilter],
(todos, selectedColumn) => {
        let filtered;
        switch (selectedColumn) {
            case 'all':
                filtered = todos;
                break;
            case 'completed':
                filtered = todos.filter((todo: { isdone: boolean }) => todo.isdone);
                break
            case 'active':
                filtered = todos.filter(todo => !todo.isdone);
                break;
            
            default:
                filtered = todos;
            break;
    }
    return filtered.slice().sort((b, a) => {
            return new Date(a.createdAt ?? 0).getTime() - new Date(b.createdAt ?? 0).getTime();
        });
    
    }
);





