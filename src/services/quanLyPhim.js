import { http, http2 } from "./config";

export const quanLyPhimServ = {
  getAllBanner: () => {
    return http.get("/QuanLyPhim/LayDanhSachBanner");
  },
  getAllMovie: () => {
    return http2.get("/QuanLyPhim/LayDanhSachPhim");
  },
  themPhimUploadHinh: (data) => {
    return http.post("/QuanLyPhim/ThemPhimUploadHinh", data);
  },
  getInforMovie: (movieCodes) => {
    return http.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCodes}`);
  },
  getMoviePage: (page) => {
    return http2.get(
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?page=${page}&pageSize=8`
    );
  },
  getInforMovie: (movieCodes) => {
    return http.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCodes}`);
  },
};
