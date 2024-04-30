import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getAllLichChieuThunk } from '../../../redux/slice/lichChieuPhimSlice'
import "./detailMovie.scss"
import moment from 'moment'
import { Tabs } from 'antd'
import CumRapDetailMovie from './CumRapDetailMovie'

const DetailMovie = () => {
  let dispatch = useDispatch()
  let { id } = useParams()
  useEffect(() => { dispatch(getAllLichChieuThunk(id)) }, [])
  let arrLichChieuPhim = useSelector((state) => {
    return state.lichChieuPhimSlice.arrLichChieu
  })
  let { biDanh, dangChieu, heThongRapChieu, hinhAnh, maPhim, moTa, ngayKhoiChieu, tenPhim, trailer, danhGia } = arrLichChieuPhim
  // console.log(arrLichChieuPhim)
  // console.log(heThongRapChieu)

  let handleBuy=() => {
    alert("Hãy chọn Cụm Rạp, Ngày, Giờ")
  }
  
  return (
    <div className='detailMovie '>
      <div className='container'>
        {/* thông tin phim */}
        <div className='flex flex-wrap justify-center pt-2'>
          <div className='w-full text-white font-bold hover:text-blue-300'>
            <NavLink to='/'> Trang Chủ</NavLink>
          </div>
          <div className='w-2/12'>
            <div className=' img_phim'>
              <img src={hinhAnh} alt="" />
            </div>
          </div>
          <div className=' text-white pl-4 desc_movie'>
            <p> <b>Tên phim:</b> {tenPhim}</p>
            <p> <b>Đánh giá:</b> {danhGia}</p>
            <p> <b>Mô tả:</b> {moTa}</p>
            <p> <b>Ngày khởi chiếu:</b> {moment(ngayKhoiChieu).format("DD-MM-YYYY")}</p>
            <br />
            <div>
              <button className=' rounded bg-green-600 px-4 py-2' onClick={handleBuy}>Mua vé</button>
              {/* <button className=' rounded bg-green-600 px-4 py-2 ml-2'>trailer</button> */}
            </div>
          </div>

        </div>
        <br />
        {/* cụm rạp đang chiếu */}
        <div className='cum_rap'>
          <Tabs
            tabPosition="left"
            style={{
              height: "50vh",
            }}
            items={heThongRapChieu?.map((cumrap, index) => {
              // console.log(cumrap);
              return {
                label: <img className="w-14" src={cumrap.logo} />,
                key: cumrap.maHeThongRap,
                children: <CumRapDetailMovie cumRapChieu={cumrap.cumRapChieu} />,
              };
            })}
          />
        </div>
      </div>

    </div>
  )
}

export default DetailMovie
