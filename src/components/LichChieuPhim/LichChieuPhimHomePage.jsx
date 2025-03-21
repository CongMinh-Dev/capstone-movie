import React, { useState, useEffect, useContext } from "react";
import { Modal, Tabs } from "antd";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import "./lichChieuPhim.scss";
import { getLocalStorage } from "../../utils/util";
import { NotifyContext } from "../../template/UserTemplate/UserTemplate";
import { use } from "react";

const LichChieuPhim = ({ cumrap }) => {
  const { maPhim } = useParams();
  const navigate = useNavigate();
  const [filmSelected, setFilmSelected] = useState(null);
  const user = getLocalStorage("userMovie0967146");
  const notify = useContext(NotifyContext);

  useEffect(() => {
    setFilmSelected(maPhim);
  }, [maPhim]);

  return (
    <div className="">
      <Tabs
        className="tab_cum_rap"
        tabPosition="left"
        style={{ height: "500px" }}
        items={cumrap.map((item, index) => {
          return {
            label: (
              <div className="label_cumrap text-left uppercase">
                <h4 className="text-white font-medium text-lg ">
                  {item.tenCumRap}
                </h4>
                <p className="text-yellow-200 text-xs">{item.diaChi}</p>
              </div>
            ),
            key: index,
            children: (
              <div
                className="phimDangChieu"
                style={{ height: "500px", overflowY: "scroll" }}
              >
                {item.danhSachPhim.map((phim, index) => {
                  if (filmSelected == null) {
                    return (
                      <div className="tabPhim flex my-5" key={index}>
                        <div className="tabPhimContent mr-5 mb-2">
                          <img
                            className="w-36  rounded-lg"
                            src={phim.hinhAnh}
                            alt=""
                          />
                        </div>
                        <div className="titlePhim mr-2 ">
                          <h3 className="namePhim mb-3">
                            <span className="c18Content bg-orange-600 text-white rounded py-1 px-2 text-lg font-semibold mr-3">
                              C18
                            </span>
                            <span className="titleContent text-xl font-semibold">
                              {phim.tenPhim}
                            </span>
                          </h3>
                          <div className="lich_chieu_phim">
                            {phim.lstLichChieuTheoPhim
                              .slice(0, 4)
                              .map((gioChieu, index) => {
                                // console.log(phim.lstLichChieuTheoPhim)
                                return (
                                  <div key={index}>
                                    <p className="space-x-3">
                                      <button className="rounded p-1 button_time"
                                        onClick={() => {
                                          user?(navigate(
                                            `/buy-ticket/${gioChieu.maLichChieu}`
                                          )):(notify("Đăng nhập để đặt vé"))
                                          
                                        }}
                                      >
                                        {moment(
                                          gioChieu.ngayChieuGioChieu
                                        ).format("DD-MM-YYYY")}
                                        <span>~</span>
                                        <span>
                                          {moment(
                                            gioChieu.ngayChieuGioChieu
                                          ).format("hh:mm")}
                                        </span>
                                      </button>
                                    </p>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    );
                  } else if (filmSelected != null) {
                    if (filmSelected === phim.maPhim) {
                      return (
                        <div className="tabPhim flex my-5" key={index}>
                          <div className="tabPhimContent mr-5 mb-2">
                            <img
                              className="w-36 rounded-lg"
                              src={phim.hinhAnh}
                              alt=""
                            />
                          </div>
                          <div className="titlePhim mr-2 ">
                            <h3 className="namePhim mb-3">
                              <span className="c18Content bg-orange-600 text-white rounded py-1 px-2 text-lg font-semibold mr-3">
                                C18
                              </span>
                              <span className="titleContent text-xl font-semibold">
                                {phim.tenPhim}
                              </span>
                            </h3>
                            <div className="lich_chieu_phim">
                              {phim.lstLichChieuTheoPhim
                                .slice(0, 4)
                                .map((gioChieu, index) => {
                                  // console.log(phim.lstLichChieuTheoPhim)
                                  return (
                                    <div key={index}>
                                      <p className="space-x-3">
                                        <button className="rounded p-1 button_time"
                                          onClick={() => {
                                            user?(navigate(
                                              `/buy-ticket/${gioChieu.maLichChieu}`
                                            )):(notify("Đăng nhập để đặt vé"))
                                            
                                          }}
                                        >
                                          {moment(
                                            gioChieu.ngayChieuGioChieu
                                          ).format("DD-MM-YYYY")}
                                          <span>~</span>
                                          <span>
                                            {moment(
                                              gioChieu.ngayChieuGioChieu
                                            ).format("hh:mm")}
                                          </span>
                                        </button>
                                      </p>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      <p>không có lịch chiếu</p>;
                    }
                  }
                })}
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default LichChieuPhim;
