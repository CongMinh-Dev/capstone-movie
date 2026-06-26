import { http, http2 } from "./config";

export const quanLyRapServ = {
  getAllMaHeThongRap() {
    return http.get("/QuanLyRap/LayThongTinHeThongRap");
  },
  getAllThongTinCumRap(maHeThongRap) {
    return http2.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}`);
  },
  getLichChieu(maLichChieu) {
    return http.get(
      `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  },
  getAllThongTinLichChieu: (maPhim) => {
    return http.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)

  }
};
