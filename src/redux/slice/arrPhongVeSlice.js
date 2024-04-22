// rxslice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleTurnOffLoading, handleTurnOnLoading } from "./loadingSlice";
import { quanLyRapServ } from "../../services/quanLyRap";
import { quanLyDatve } from "../../services/quanLyDatve";

const initialState = {
  arrPhongVe: {},
  arrCart: [],
  objTicket: {}
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

let arrGheToObjTicket = []

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
      arrCartTam.splice(index, 1)
      state.arrCart = [...arrCartTam]
    },
    handelAddToTicketSlice: (state, action) => {
      let ticket = { maLichChieu: action.payload.maLichChieu}
      let gheTam = {
        maGhe: action.payload.ghe.maGhe,
        giaVe: action.payload.ghe.giaVe,
      }
      arrGheToObjTicket.push(gheTam)
      ticket.danhSachVe = [...arrGheToObjTicket]
      state.objTicket = ticket
    },
    handelRemoveToTicketSlice: (state, action) => {
      let ticket = { maLichChieu: action.payload.maLichChieu}
      let index=arrGheToObjTicket.findIndex((ghe) => {
        return ghe.maGhe == action.payload.ghe.maGhe
      }
      )
      arrGheToObjTicket.splice(index,1)
      ticket.danhSachVe = [...arrGheToObjTicket]
      state.objTicket = ticket
    },

  },


  extraReducers: (builder) => {
    builder.addCase(getAllArrPhongVeThunk.fulfilled, (state, action) => {
      // console.log(action);
      state.arrPhongVe = action.payload;
    });
  },
});

export const { handelAddToCartSlice, handelDeletteCartSlice, handelAddToTicketSlice,
  handelRemoveToTicketSlice } = arrPhongVeSlice.actions;

export default arrPhongVeSlice.reducer;
