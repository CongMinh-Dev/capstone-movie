import React, { useState, useEffect, useContext } from "react";
import { Modal, Tabs } from "antd";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import "./lichChieuPhim.scss";
import { getLocalStorage } from "../../utils/util";
import "./lichChieuPhim.scss"
import { NavLink } from 'react-router-dom'
import { NotifyContext } from "../../template/UserTemplate/UserTemplate";



const LichChieuPhim = ({ cumRapChieu }) => {

    const user = getLocalStorage("userMovie0967146");
    const notify = useContext(NotifyContext);
    return (
        <div className='cumRapDetailMovie'>
            {cumRapChieu?.map((cumrap) => {
                return (
                    <div key={cumrap.maCumRap}>
                        <div className='font-bold text-green-600 pb-2 pt-6'>{cumrap.tenCumRap}</div>
                        <div className='lichChieuPhim'>
                            {cumrap.lichChieuPhim?.map((item) => {
                                return (
                                    <div key={item.maLichChieu} className='px-2'>
                                        {user ? (
                                            <NavLink to={`/buy-ticket/${item.maLichChieu}`}>
                                                <button className='border rounded py-2 px-4'  >
                                                    {moment(item.ngayChieuGioChieu).format("DD-MM-YYYY")} ~ {moment(item.ngayChieuGioChieu).format("HH:MM")}

                                                </button>
                                            </NavLink>) : (
                                            <button className='border rounded py-2 px-4'  onClick={() => {
                                                notify("Đăng nhập để đặt vé")
                                            }
                                            }       >
                                                {moment(item.ngayChieuGioChieu).format("DD-MM-YYYY")} ~ {moment(item.ngayChieuGioChieu).format("HH:MM")}

                                            </button>)}

                                    </div>
                                )
                            }
                            )}
                        </div>

                    </div>
                )
            }
            )}

        </div>
    )
};

export default LichChieuPhim;
