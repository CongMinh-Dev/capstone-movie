import { configureStore } from "@reduxjs/toolkit";
import phimSlice from "./slice/phimSlice";
import loadingSlice from "./slice/loadingSlice";
import userSlice from "./slice/userSlice";
import lichChieuPhimSlice from "./slice/lichChieuPhimSlice";


export const store = configureStore({
  reducer: {
    // hoTen: () => {
    //   return "CyberSoft";
    // },
    phimSlice,
    loadingSlice,
    userSlice,
    lichChieuPhimSlice,
    // huhuSlice
  },
});
