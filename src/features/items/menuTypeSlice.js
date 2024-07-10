import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuTypes: [],  // Initialize as an empty array instead of null
};

const menuTypeSlice = createSlice({
    name: 'menuTypes',
    initialState,
    reducers: {
        setMenuTypes: (state, action) => {
            state.menuTypes = action.payload;
        },
    },
});

export const { setMenuTypes } = menuTypeSlice.actions;

export const selectMenuTypes = state => state.menuTypes.menuTypes;

export default menuTypeSlice.reducer;
