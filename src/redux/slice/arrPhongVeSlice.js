// rxslice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleTurnOffLoading, handleTurnOnLoading } from "./loadingSlice";
import { quanLyRapServ } from "../../services/quanLyRap";
import { quanLyDatve } from "../../services/quanLyDatve";

const initialState = {
  arrPhongVe: {},
};

export const getAllArrPhongVeThunk = createAsyncThunk(
  "quanLyDatve/getAllArrPhongVeThunk",
  async (dataLocal, { _, dispatch }) => {
    dispatch(handleTurnOnLoading());
    const res = await quanLyDatve.layDanhSachPhongVe(dataLocal);
    dispatch(handleTurnOffLoading());
    // res.data.content
    return res.data.content;
  }
);

const arrPhongVeSlice = createSlice({
  name: "quanLyDatve",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getAllArrPhongVeThunk.fulfilled, (state, action) => {
    //   console.log(action);
      state.arrPhongVe = action.payload;
    
      
    });
  },
});

// export const {  } = lichChieuPhimSlice.actions;

export default arrPhongVeSlice.reducer;
