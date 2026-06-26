
import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { quanLyRapServ } from "../../services/quanLyRap";
import LichChieuPhimHomePage from "../../components/LichChieuPhim/LichChieuPhimHomePage";
import "./_lichChieuCumRap.scss";

const LichChieuCumRap = () => {
  const [maHeThongRapArray, setMaHeThongRapArray] = useState([]);



  useEffect(() => {
    quanLyRapServ
      .getAllMaHeThongRap()
      .then((res) => {
        setMaHeThongRapArray(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
   
  }, []);

  return (
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
              items={maHeThongRapArray.map((heThong) => {
                return {
                  label: <img className="w-14" src={heThong.logo} alt="" />,
                  key: heThong.maHeThongRap,
                  children: <LichChieuPhimHomePage maHeThongRap={heThong.maHeThongRap} />,
                };
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LichChieuCumRap;