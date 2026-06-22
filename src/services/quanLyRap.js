import { http } from "./config";

export const quanLyRapServ = {
  getAllMaHeThongRap() {
    return http.get("/QuanLyRap/LayThongTinHeThongRap");
  },
  getAllThongTinCumRap(maHeThongRap) {
    return http.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP02`);
  },
  getLichChieu(maLichChieu) {
    return http.get(
      `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  },
  getAllThongTinLichChieu:(maPhim) => {
    return http.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    
  }
};
