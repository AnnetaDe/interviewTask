import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';



export const selectTodos = (state: RootState) => state.todos.todos;

export const selectLoading = (state: RootState) => state.todos.loading;
