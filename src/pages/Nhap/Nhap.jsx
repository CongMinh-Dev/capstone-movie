import React, { useCallback, useEffect, useRef, useState } from 'react'
import Nhap2 from './Nhap2'

const Nhap = () => {
  let [a, setA] = useState({ name: "minh", count: 0 })
  console.log("nhap")

  let handleTang = useCallback(() => {
    setA((params) => {
      return {
        ...params,
        count: params.count + 1
      }
    }
    )

  }, [setA])


  // const lastScrollY = useRef(0);
  const handleScrollHeader = () => {
    // Lấy vị trí cuộn hiện tại của cửa sổ
    const currentScrollY = window.scrollY;
    // So sánh vị trí cuộn hiện tại với vị trí cuộn trước đó
    if (currentScrollY > 200) {
      // Cuộn xuống
      console.log("Xuống");
    } else if (currentScrollY < 200) {
      // Cuộn lên
      console.log("Lên");
    }
    // Cập nhật vị trí cuộn trước đó cho lần kiểm tra tiếp theo
    // lastScrollY.current = currentScrollY;
  };
  useEffect(() => {
    // Thêm event listener khi component mount
    window.addEventListener("scroll", handleScrollHeader);

    // Dọn dẹp event listener khi component unmount để tránh rò rỉ bộ nhớ
    return () => {
      window.removeEventListener("scroll", handleScrollHeader);
    };
  }, []);



  return (
    <div className='h-[9000px]'>
      <h1>{a.count} </h1>
      <button className='bg-blue-600'
        onClick={handleTang}
      >Tăng ở nháp</button>
      <br /> <br />
      <p  >nội dung ở nháp 2</p>
      <Nhap2 name={a.name} tang={handleTang} />

    </div>
  )
}

export default Nhap
