import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface FilterState {
    filter: 'all' | 'completed'| 'active';
}
    
const initialState:FilterState = {
  filter: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,


  reducers: {
    setNewFilter: (state, action:PayloadAction<FilterState['filter']>) => {
      state.filter = action.payload;
    },
  },
});

export const { setNewFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
