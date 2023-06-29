import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice = createSlice({
	name: "filter",
	initialState: {
		filter: '',
	},
	reducers: {
		setFilter(state, action) {
			state.filter = action.payload;
		}
	}
})

export const { setFilter } = FilterSlice.actions;
export default FilterSlice.reducer;