import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import dayjs from 'dayjs';

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectCurrentFilter = (state: RootState) => state.filter.filter;
export const selectLoading = (state: RootState) => state.todos.loading;

export const selectModalisOpen = (state: RootState) => state.modal.isOpen;
export const selectModalContent = (state: RootState) => state.modal.content;
export const selectFilteredTasks = createSelector(
    [selectTodos, selectCurrentFilter],
(todos, filter) => {
        let filtered;
        switch (filter) {
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


export const selectFilteredColumns = createSelector([selectTodos], (todos) => ({
  today: todos.filter((todo) => dayjs(todo.schedule).isSame(dayjs(), 'day') && !todo.isdone),
  tomorrow: todos.filter((todo) => dayjs(todo.schedule).isSame(dayjs().add(1, 'day'), 'day') && !todo.isdone),
  later: todos.filter((todo) => dayjs(todo.schedule).isAfter(dayjs().add(1, 'day'), 'day') && !todo.isdone),
  completed: todos.filter((todo) => todo.isdone),
}));