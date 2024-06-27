import { createSlice } from "@reduxjs/toolkit";

interface TinitialState {
  name: string;
  description: string;
}
[];

const initialState: TinitialState[] = [];

const todoSlicer = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {},
});

export default todoSlicer.reducer;
