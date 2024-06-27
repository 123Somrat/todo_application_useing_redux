import { createSlice } from "@reduxjs/toolkit";


const initialState= {
     todo:[]
}

const todoSlicer = createSlice({
  name: "todo",
  initialState,
  reducers: {}



});

export default todoSlicer.reducer;
