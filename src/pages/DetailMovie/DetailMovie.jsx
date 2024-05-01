import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import LichChieuCumRap from "../../layout/LichChieuCumRap/LichChieuCumRap";
// import noiDungChiTiet from "../../layout/noiDungChiTiet/noiDungChiTiet";
import {
  handleTurnOffLoading,
  handleTurnOnLoading,
} from "../../redux/slice/loadingSlice";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import RandomMovie from "../../layout/randomMovie/RandomMovie";
import NoiDungChiTiett from "../../layout/noiDungChiTiet/NoiDungChiTiett";
import "./_detailMovie.scss";
import { getAllLichChieuThunk } from "../../redux/slice/lichChieuPhimSlice";
// import "./_lichChieuCumRap.scss";
import LichChieuPhim from "./LichChieuPhim";
import { Tabs } from "antd";


const DetailMovie = () => {
  const dispatch = useDispatch();
  const { maPhim } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    dispatch(handleTurnOnLoading());
    quanLyPhimServ
      .getInforMovie(maPhim)
      .then((res) => {
        // console.log(res.data.content);
        dispatch(handleTurnOffLoading());
        setMovie(res.data.content);
        dispatch(getAllLichChieuThunk(maPhim))
      })
      .catch((err) => { });
  }, [dispatch, maPhim]);


  // let { id } = useParams()
  // useEffect(() => { dispatch(getAllLichChieuThunk(id)) }, [])
  let arrLichChieuPhim = useSelector((state) => {
    return state.lichChieuPhimSlice.arrLichChieu
  })
  let { biDanh, dangChieu, heThongRapChieu, hinhAnh, moTa, ngayKhoiChieu, tenPhim, trailer, danhGia } = arrLichChieuPhim
  // console.log(arrLichChieuPhim)
  // console.log(heThongRapChieu)




  return (
    <>
      {/* header */}
      <Header />
      {/* banner detail */}
      <div className="BannerDetailMovie w-full overflow-hidden">
        <img src={movie.hinhAnh} className="w-full object-center" alt="" />
      </div>
      {/* content */}
      <div
        className="py-20"
        style={{
          background:
            " linear-gradient(193deg, rgba(255,255,255,1) 0%,#E18604 90%)",
        }}
      >
        <div className="contentChiTiet container">
          <NoiDungChiTiett noiDung={movie} />
          <RandomMovie />
        </div>
      </div>

      {/* lịch chiếu cụm rạp */}
      <div className="listTheaterSchedule py-20" id="lichChieu">
        <div className=" container">
          <h2 className="listTheaterScheduleContent pb-10 font-bold text-4xl text-center">
            Danh sách lịch chiếu cụm rạp
          </h2>
          {/* tab lịch chiếu cụm rạp  */}
          <div className="tabContentSchedule p-5 my-5 outline-dashed outline-1 outline-white">
            <div className="tabContentTheater mx-auto">
              <Tabs
                tabPosition="top"
                style={{
                  height: "700px",
                }}
                items={heThongRapChieu?.map((cumrap, index) => {
                  // console.log(cumrap);
                  return {
                    label: <img className="w-14" src={cumrap.logo} alt="" />,
                    key: cumrap.maHeThongRap,
                    children: <LichChieuPhim cumRapChieu={cumrap.cumRapChieu} />,
                  };
                })}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-10" />
    </>
  );
};

export default DetailMovie;
