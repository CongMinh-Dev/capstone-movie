import React, { Component, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { handelDeletteCartSlice } from '../../../redux/slice/arrPhongVeSlice';


export default function Cart({ thongtinPhim }) {
  let arrCart = useSelector((state) => {
    return state.arrPhongVeSlice.arrCart
  }
  )
  let dispatch=useDispatch()
  let tongTien = 0;

  let handelDelete = (ghe) => {
    // const divElement = document.getElementById(`${ghe.maGhe}`);
    // const className = divElement.className

    document.getElementById(ghe.maGhe).classList.remove("ghe_dang_dat");
      dispatch(handelDeletteCartSlice(ghe))

    // if (className == "ghe_dang_dat") {

      


    // } 
}

  return (
    <div className='cart col-4'>
      <br />
      <h2 >DANH SÁCH GHẾ BẠN ĐÃ CHỌN</h2>
      <br /><br />

      <div className="cart_ghe_da_dat"></div> <span>Ghế đã đặt</span> <br />
      <div className="cart_ghe_dang_chon"></div> <span>Ghế đang chọn</span> <br />
      <div className="cart_ghe_chua_dat"></div> <span>Ghế chưa đặt</span> <br />
      <br />
      <div className="cart_table">
        <table className=' '>
          <thead>
            <tr>
              <th className='th_so_ghe'>Số Ghế</th>
              <th className='th_gia'>Giá</th>
              <th className='th_huy'>Hủy</th>
            </tr>
          </thead>

          {/* render list  */}
          <tbody>
            {arrCart.map((ghe) => {

              return (
                <tr>
                  <td  style={{ color: "yellow", fontWeight: "bold" }}>{ghe.tenGhe}</td>
                  <td  style={{ color: "yellow", fontWeight: "bold" }}>{ghe.giaVe} đ</td>
                  <td > 
                    <button className=' rounded bg-red-600 px-2 py-1 my-1' onClick={() => {
                      handelDelete(ghe)
                    }}>Xóa</button>
                  </td>
                </tr>

              )
            })}
            {/* hàng tổng tiền */}
            {arrCart.map((ghe) => {
              tongTien = tongTien + ghe.giaVe

            })}
            <tr>
              <td style={{ fontWeight: "bold" }}>Tổng Tiền</td>
              <td style={{ color: "yellow", fontWeight: "bold" }}>{tongTien} đ</td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  )
}






