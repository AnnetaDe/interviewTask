import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTodos, updateTask } from "./todoOperations";
import { ITodo } from "../types/todo.types";
import dayjs from "dayjs";



type TColumnKeys = "today" | "tomorrow" | "week" | "next week" | "later" | "completed";

interface TodoState {
    todos: ITodo[];
    columns: {
        "today": ITodo[];
        "tomorrow": ITodo[];
        "week": ITodo[];
       "next week": ITodo[];
        "later": ITodo[];
        "completed": ITodo[];
    },
    loading: boolean;
    error: string | null;
}
const initialState: TodoState = {
    todos: [],
    columns: {
        "today": [],
        "tomorrow": [],
        "week": [],
        "next week": [],
        "later": [],
        "completed": []
    },
    loading: false,
    error: null,
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        updateColumns(state, action:PayloadAction<Partial<Record<TColumnKeys, ITodo[]>>>) {
            state.columns = {
                ...state.columns,
                ...action.payload,
            };
        },
    },
   
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
                state.loading = false;
                state.todos = action.payload;
                state.columns = action.payload.reduce((acc: TodoState['columns'], todo: ITodo) => {
                    
                    const schedule = dayjs(todo.schedule).startOf('day');
                    if ((dayjs().isSame(schedule, 'day'))&& !todo.isdone) {
                        acc.today.push(todo);
                    } else if (dayjs().add(1, 'day').isSame(schedule, 'day')) {
                        acc.tomorrow.push(todo);
                    } else if (dayjs().endOf('week').isSame(schedule, 'day')) {
                        acc.week.push(todo);
                    } else if (dayjs().add(1, 'week').isSame(schedule, 'day')) {
                        acc["next week"].push(todo);
                    } else if (dayjs().add(2, 'week').isBefore(schedule)) {
                        acc.later.push(todo);
                    }
                    if (todo.isdone) {
                        acc.completed.push(todo);
                    }
                    return acc;
                }, {
                    "today": [],
                    "tomorrow": [],
                    "week": [],
                    "next week": [],
                    "later": [],
                    "completed": []
                }),
                    state.error = null;
            }
            )
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

export const { updateColumns } = todoSlice.actions;
export default todoSlice.reducer;
