import { todoApi } from '../config/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITodo } from '../types/todo.types';


type TodosResponse = ITodo[];

export const fetchTodos = createAsyncThunk<TodosResponse>(
    'todos/fetchTodos',
    async () => {
    const response = await todoApi.get<TodosResponse>('/todo');
    console.log(response);
    return response.data;
    });
export const addTask = createAsyncThunk<ITodo, ITodo>(
    'todos/addTodo',
    async (task) => {
    const response = await todoApi.post<ITodo>('/todo',  task );
    return response.data;
    });
export const updateTask = createAsyncThunk<ITodo, ITodo>(
    'todos/updateTodo',
    async (task) => {
    const response = await todoApi.put<ITodo>(`/todo/${task.id}`, task);
    return response.data;
    });  
export const deleteTask = createAsyncThunk<ITodo, ITodo>(
    'todos/deleteTodo',
    async (task) => {
    const response = await todoApi.delete<ITodo>(`/todo/${task.id}`);
    return response.data;
    });
    

