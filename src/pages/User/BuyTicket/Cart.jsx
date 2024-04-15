import React, { Component } from 'react'
import { connect } from 'react-redux'


class Cart extends Component {
  render() {
    let tongTien=0;
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
          <table className=' table'>
            <thead>
              <tr>
                <th>Số Ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>

            {/* render list  */}
            <tbody>
              {this.props.cart.map((item) => {

                return (
                  <tr>
                    <td style={{color:"yellow", fontWeight:"bold"}}>{item.soGhe}</td>
                    <td style={{color:"yellow", fontWeight:"bold"}}>{item.gia} đ</td>
                    <td>
                      <button className='btn-danger' onClick={() => {
                                    this.props.handelDelete(item);
                                    
                                }}>Xóa</button>
                    </td>
                  </tr>

                )
              })}

              {/* hàng tổng tiền */}
              {this.props.cart.map((item) => {
                tongTien=tongTien+item.gia
                
              })}
              <tr>
                <td style={{fontWeight:"bold"}}>Tổng Tiền</td>
                <td style={{color:"yellow", fontWeight:"bold"}}>{tongTien} đ</td>
                <td></td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
      handelDelete: (ghe) => {
          let action = {
              type: "Delete",
              payload: ghe
          }
          dispatch(action)
      }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Cart)