import { http } from "./config";

export const quanLyRapServ = {
  getAllThongTinCumRap:() =>{
    return http.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01");
  },
  getAllThongTinLichChieu:(maPhim) => {
    return http.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    
  }
  
};
