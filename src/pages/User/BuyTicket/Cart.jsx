import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handelDeletteCartSlice, handelRemoveToTicketSlice } from '../../../redux/slice/arrPhongVeSlice';
import axios from 'axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { getLocalStorage } from '../../../utils/util';


export default function Cart({ thongtinPhim }) {
  // redux
  let arrCart = useSelector((state) => {
    return state.arrPhongVeSlice.arrCart
  }
  )
  let objTicket = useSelector((state) => {
    return state.arrPhongVeSlice.objTicket
  }
  )
  let dispatch = useDispatch()


  let tongTien = 0;
  let handelDelete = (ghe) => {
    document.getElementById(ghe.maGhe).classList.remove("ghe_dang_dat");
    dispatch(handelDeletteCartSlice(ghe))
  }


  // xóa vé
  let { maLichChieu } = useParams()
  let handelDeleteTicket = (ghe) => {
    // console.log(ghe);
    let payload = { ghe, maLichChieu }
    dispatch(handelRemoveToTicketSlice(payload))
  }


  // đặt vé
  let userLocal = getLocalStorage("user")
  let tokenUser = userLocal.accessToken
  let handelBookingTicket = () => {
    
    if (arrCart.length>0) {
      axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        method: "POST",
        data: objTicket,
        headers: {
          Authorization: `Bearer ${tokenUser}`,
          TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsIm5iZiI6MTY5ODY4NTIwMCwiZXhwIjoxNzI1Mjk2NDAwfQ.CPY1b9IiMcklQZ9hjqIzrdiOlQ5YnV4VpzGu_yZr7G0"
        }
      })
        .then((res) => {
          console.log("xử lý thành công");
          window.location.reload();


        })
        .catch((err) => {
          console.log(err.response.data);

        });
    }


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
                  <td style={{ color: "yellow", fontWeight: "bold" }}>{ghe.tenGhe}</td>
                  <td style={{ color: "yellow", fontWeight: "bold" }}>{ghe.giaVe} đ</td>
                  <td >
                    <button className=' rounded bg-red-600 px-2 py-1 my-1' onClick={() => {
                      handelDelete(ghe);
                      handelDeleteTicket(ghe)
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
            <tr>
              <td colSpan={"3"} className='p-1 '>
                <button className='button_booking_ticket' onClick={(params) => {
                  handelBookingTicket();
                }} >BOOKING TICKET</button>

              </td>

            </tr>
          </tbody>
        </table>


      </div>

    </div>
  )
}






