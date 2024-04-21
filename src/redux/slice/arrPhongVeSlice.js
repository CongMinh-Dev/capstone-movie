// rxslice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleTurnOffLoading, handleTurnOnLoading } from "./loadingSlice";
import { quanLyRapServ } from "../../services/quanLyRap";
import { quanLyDatve } from "../../services/quanLyDatve";

const initialState = {
  arrPhongVe: {},
  arrCart: []
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


let arrCartTam = []

const arrPhongVeSlice = createSlice({
  name: "quanLyDatve",
  initialState,
  reducers: {
    handelAddToCartSlice: (state, action) => {
      arrCartTam.push(action.payload)
      state.arrCart = [...arrCartTam]
    },
    handelDeletteCartSlice: (state, action) => {
      let ghe = action.payload
      let index = arrCartTam.findIndex((gheTam) => {
        return gheTam.maGhe == ghe.maGhe
      })
      arrCartTam.splice(index,1)
      state.arrCart = [...arrCartTam]
    },

  },


  extraReducers: (builder) => {
    builder.addCase(getAllArrPhongVeThunk.fulfilled, (state, action) => {
      // console.log(action);
      state.arrPhongVe = action.payload;
    });
  },
});

export const { handelAddToCartSlice,handelDeletteCartSlice } = arrPhongVeSlice.actions;

export default arrPhongVeSlice.reducer;
