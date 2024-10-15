import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuItems: [],
  filterCategory: "",
  filterName: "",
};

const menuOpSlice = createSlice({
  name: "menuOperations",
  initialState: initialState,
  reducers: {
    setMenuItems: (state, action) => {
      state.menuItems = action.payload;
    },
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
    setFilterName: (state, action) => {
      state.filterName = action.payload;
    },
  },
});

export const { setFilterCategory, setFilterName, setMenuItems } =
  menuOpSlice.actions;

export default menuOpSlice.reducer;
