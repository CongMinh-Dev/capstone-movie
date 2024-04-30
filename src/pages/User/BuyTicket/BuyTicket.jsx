import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import "./buyTicket.scss"
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllArrPhongVeThunk } from '../../../redux/slice/arrPhongVeSlice'
import Item from './Item'
const BuyTicket = () => {
  let { maLichChieu } = useParams()

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllArrPhongVeThunk(maLichChieu))
  }
    , [])




  return (
    <div className='background_img_ticket'>
      <div className='background_color_ticket '></div>
      <div className="booking_ticket ">
        {/* trang chủ */}
        <div className='w-full text-white font-bold hover:text-blue-300  home_page'>
          <NavLink to='/'>Về Trang Chủ</NavLink>
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
          <br />

          <Item />


        </div>

        <Cart />



      </div>

    </div>
  )
}

export default BuyTicket
