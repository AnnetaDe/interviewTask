import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTodos, updateTask } from "./todoOperations";
import { ITodo } from "../types/todo.types";


interface TodoState {
    todos: ITodo[];
    loading: boolean;
    error: string | null;
}
const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
   
    },
   
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(updateTask.fulfilled, (state, action:PayloadAction<ITodo>) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos[index] = action.payload;
            }
            })
            .addCase(deleteTask.fulfilled, (state, action: PayloadAction<ITodo>) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            })
            .addCase(addTask.fulfilled, (state, action: PayloadAction<ITodo>) => {
            state.todos.unshift(action.payload);
            })
            .addMatcher(
                (action) => {
                    return [fetchTodos.pending, updateTask.pending, deleteTask.pending, addTask.pending].includes(action.type);
                },
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
        )
            .addMatcher(
                (action) => {
                    return [fetchTodos.rejected, updateTask.rejected, deleteTask.rejected, addTask.rejected].includes(action.type);
                },
                (state, action: PayloadAction<{ message: string }>) => {
                    state.loading = false;
                    state.error = action.payload.message || 'Something went wrong';
                }
        );
        
        
    },
   
});


export default todoSlice.reducer;
