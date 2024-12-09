import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IFilterState {
    filter: 'all' | 'completed'| 'active';
}
    
const initialState:IFilterState = {
  filter: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,


  reducers: {
    setNewFilter: (state, action:PayloadAction<IFilterState['filter']>) => {
      state.filter = action.payload;
    },
  },
});

export const { setNewFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
