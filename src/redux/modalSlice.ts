import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../types/todo.types";
interface ModalState {
    isOpen: boolean;
    content:ITodo;

}



const initialState: ModalState = {
    isOpen: false,
    content: {} as ITodo,
};
const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal(state, action: { payload: ITodo }) {
            state.isOpen = true;
            state.content = action.payload
          
        },
        closeModal(state) {
            state.isOpen = false;
            state.content = {} as ITodo;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer= modalSlice.reducer;