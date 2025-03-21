import React, { useContext, useEffect, useState } from "react";
import Header from "../../layout/Header/Header";
import Banner from "../../layout/Banner/Banner";
import ListMovie from "../../layout/ListMovie/ListMovie";
import LichChieuCumRap from "../../layout/LichChieuCumRap/LichChieuCumRap";
// import { NotifyContext } from "../../template/UserTemplate/UserTemplate";
import Footer from "../../layout/Footer/Footer";
import BackToHome from "../../components/backToHome/BackToHome";

const HomePage = () => {
  let [isBack,setIsBack]=useState(false)
  useEffect(() => {
    onscroll=() => {
      if (window.pageYOffset>400) {
        setIsBack(true)
      }else{setIsBack(false)}
    }
    window.addEventListener("scroll",onscroll)
  }
  )

  return (
    <div>
      {/* header  */}
      <Header />
      
      {/* banner  */}
      <Banner />

      {/* list movie  */}
      <ListMovie />

      {/* lịch chiếu cụm rạp */}
      <LichChieuCumRap />
      
      {/* footer  */}
      <Footer />

      {/* back to home */}
      {isBack?<BackToHome/>:null}
      
    </div>
  );
};

export default HomePage;
