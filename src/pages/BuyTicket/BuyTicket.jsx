import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import "./buyTicket.scss"
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllArrPhongVeThunk } from '../../redux/slice/arrPhongVeSlice'
import Item from './Item'
import Footer from '../../layout/Footer/Footer'
import BackToHome from '../../components/backToHome/BackToHome'
const BuyTicket = () => {
  let { maLichChieu } = useParams()

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllArrPhongVeThunk(maLichChieu))
  }
    , [])

  // quay Lại
  let navigate = useNavigate()


  return (
    <div className='background_img_ticket'>
      <BackToHome/>
      
      <div className='background_color_ticket '></div>
      <div className="booking_ticket ">
        {/* trang chủ */}
        <div className='w-full text-white font-bold hover:text-blue-300  home_page'>
          <button
            className="buyTicket"
            onClick={() => {
              // navigate(`/detail/${selectedMovie.maPhim}`);
              navigate(-1)
            }}
          >
            Quay Lại Đặt Vé
          </button>
        </div>

        {/*danh sách phòng vé  */}
        <div className='list w-8/12'>
          <h1>ĐẶT VÉ XEM PHIM</h1>
          <h4 style={{ color: "white" }}>MÀN HÌNH</h4>
          <div className="screen"> </div>

          {/* hàng đầu */}
          {/* <div className='list_item  row '>
                <div className="col">{this.props.fistChartArr.hang}</div>
                {this.props.fistChartArr.danhSachGhe.map((item) => {
                    return (
                        <div style={{ color: "yellow", fontWeight: "bold", textAlign: "center" }} className='col'>{item.soGhe}</div>
                    )
                })}
            </div> */}

          <Item />


        </div>

        <Cart />
        <div className='footer_buy_ticket'>
          <Footer />

        </div>


      </div>

    </div>
  )
}

export default BuyTicket
