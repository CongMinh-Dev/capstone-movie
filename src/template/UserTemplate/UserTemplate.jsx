import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";
import useReponsive from "../../hooks/useReponsive";
import footerLogo1 from "../../assets/img/img_footer/footerLogo1.png"
import footerLogo2 from "../../assets/img/img_footer/footerLogo2.png"
import footerLogo3 from "../../assets/img/img_footer/footerLogo3.png"
import footerLogo4 from "../../assets/img/img_footer/footerLogo4.png"
import footerLogo5 from "../../assets/img/img_footer/footerLogo5.png"
import footerLogo6 from "../../assets/img/img_footer/footerLogo6.png"
import footerLogo7 from "../../assets/img/img_footer/footerLogo7.png"
import footerLogo8 from "../../assets/img/img_footer/footerLogo8.png"
import footerLogo9 from "../../assets/img/img_footer/footerLogo9.png"
import footerLogo10 from "../../assets/img/img_footer/footerLogo10.png"
import footerLogo11 from "../../assets/img/img_footer/footerLogo11.png"
import footerLogo12 from "../../assets/img/img_footer/footerLogo12.png"
import androidLogo from "../../assets/img/img_footer/androidLogo.png"
import iphoneLogo from "../../assets/img/img_footer/iphoneLogo.png"
import facebookLogo from "../../assets/img/img_footer/facebookLogo.png"
import zaloLogo from "../../assets/img/img_footer/zaloLogo.png"
import daThongBaoLogo from "../../assets/img/img_footer/daThongBao-logo.png"
import logoCongTy from "../../assets/img/img_footer/logoCongTy.jpg"

export const NotifyContext = React.createContext(null);
const UserTemplate = () => {
  const { isMobile, isTablet, isDesktop } = useReponsive();
  // console.log(isMobile);
  // console.log(isTablet);
  // console.log(isDesktop);
  const { isLoading } = useSelector((state) => state.loadingSlice);
  const [closeTime, setCloseTime] = useState(2000);
  const renderNotify = (notify) => {
    return toast(notify);
  };
  const handleCloseTime = (time) => {
    setCloseTime(time);
  };
  return  (
    <NotifyContext.Provider
      // value={{
      //   renderNotify,
      //   handleCloseTime,
      // }}
      value={renderNotify}
    >
      {isLoading ? <Loading /> : null}
      <Outlet />
      <div className=" bg-gray-800 pt-3 ">
        <div className="footer   flex flex-wrap  w-11/12 mx-auto">
          {/* cột 1 */}
          <div className="w-2/12" >

            <h2 className="text-white font-bold">TIX </h2>
            <br />

            <div className="">
              <div className=" text-gray-400 ">
                <a className="hover:text-gray-50" href="#">FAQ</a> <br />
                <a className="hover:text-gray-50" href="#">Brand Guidelines</a>
              </div>

              <div className=" text-gray-400 ">
                <a className="hover:text-gray-50" href="#">Thỏa thuận sử dụng</a> <br />
                <a className="hover:text-gray-50" href="#">Chính sách bảo mật</a>
              </div>


            </div>

          </div>

          {/* cột 2 */}
          <div className="w-2/12">
            <h2 className="text-white font-bold">ĐỐI TÁC</h2> <br />
            <div className="grid grid-cols-4 gap-1">
              <a href="#">
                <img className="hover:opacity-80 w-8 rounded-full" src={footerLogo1} alt="" />
              </a>
              <a href="#">
                <img className="hover:opacity-80 w-8 rounded-full" src={footerLogo2} alt="" />
              </a>
              <a href="#">
                <img className="hover:opacity-80 w-8 rounded-full" src={footerLogo3} alt="" />
              </a>
              <a href="#">
                <img className="hover:opacity-80 w-8 rounded-full" src={footerLogo4} alt="" />
              </a>
              <a href="#">
                <img className="hover:opacity-80 w-8 rounded-full" src={footerLogo5} alt="" />
              </a>
              <a href="#">
                <img className="hover:opacity-80 w-8 rounded-full" src={footerLogo6} alt="" />
              </a>
              <a href="#">
                <img className="hover:opacity-80 w-8 rounded-full" src={footerLogo7} alt="" />
              </a>
              <a href="#">
                <img className="hover:opacity-80 w-8 rounded-full" src={footerLogo8} alt="" />
              </a>
              <a href="#">
                <img className="hover:opacity-80 w-8 rounded-full" src={footerLogo9} alt="" />
              </a>
              <a href="#">
                <img className="hover:opacity-80 w-8 rounded-full" src={footerLogo10} alt="" />
              </a>
              <a href="#">
                <img className="hover:opacity-80 w-8 rounded-full" src={footerLogo11} alt="" />
              </a>
              <a href="#">
                <img className="hover:opacity-80 w-8 rounded-full" src={footerLogo12} alt="" />
              </a>

            </div>

          </div>

          {/* cột 3 */}
          <div className="w-1/12" >
            <h2 className="text-white font-bold">CONNECT</h2> <br />
            <a href="#">
              <img className="w-8 rounded-full inline" src={iphoneLogo} alt="" />
            </a>
            <div className="pl-1 inline">
              <a href="#">
                <img className="w-8 rounded-full inline" src={androidLogo} alt="" />
              </a>
            </div>
            <br />
                  {/* dòng 2 */}
            <div className="pt-1">
              <a href="#">
                <img className="w-8 rounded-full inline" src={facebookLogo} alt="" />
              </a>
              <div className="pl-1 inline">

                <a href="#">
                  <img className="w-8 rounded-full inline" src={zaloLogo} alt="" />
                </a>
              </div>
            </div>

          </div>

          {/* cột 5 */}
          <div className=" w-7/12 flex flex-wrap">
            <div className="w-2/12">
              <img src={logoCongTy} alt="" />
            </div>
            <div className="w-10/12 text-white">
              <p>
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION <br /> <br />

                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam. <br />
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br />
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp. <br />
                Số Điện Thoại (Hotline): 1900 545 436 <br /> <br />
              </p>
            </div>
          </div>





        </div>


      </div>
      <ToastContainer autoClose={closeTime} theme="dark" />
    </NotifyContext.Provider>
  ) ;
};

export default UserTemplate;
