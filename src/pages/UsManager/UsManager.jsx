import React, { useContext, useEffect, useState } from 'react'
import './UsManager.scss'
import InputCustom from '../../components/Input/InputCustom'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserThunk } from '../../redux/slice/userSlice';
import { NavLink, Outlet } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import * as Yup from "yup"
import { NotifyContext } from '../../template/AdminTemplate/AdminTemplate';
import { getLocalStorage } from '../../utils/util';
import axios from 'axios';
import FormUpdateUs from './FormUpdateUs';

const UsManager = () => {
  // renderer người dùng
  // lấy dữ liệu từ api thông qua redux toolkit
  let { arrUser } = useSelector((state) => state.userSlice)
  // chạy api bên redux toolkit
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUserThunk("data"))
  }, [arrUser])




  // biến chứa dữ liệu để truyền cho compoent table của ant
  const columns = [
    {
      title: 'STT',
      dataIndex: 'key',
      key: "key"

    },
    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      key: "taiKhoan"
    },
    {
      title: 'Mật Khẩu',
      dataIndex: 'matKhau',
      key: "matKhau"

    },
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      key: "hoTen"

    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: "email"

    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'soDT',
      key: "soDT"
    },
    {
      title: 'Thao Tác',
      key: 'thaoTac',
      render: (record) => (
        <div>
          <button onClick={() => handelEditUser(record.taiKhoan)} className='bg-blue-600 border rounded ml-4 py-1 px-2 text-white '>Sửa</button>
          <button onClick={() => handelDeletUser(record.taiKhoan)} className='bg-red-500 border rounded ml-4 py-1 px-2 text-white '>Xóa</button>
        </div>
      )
    },
  ];
  let newArrUser = []
  arrUser.map((item, index) => {
    let a = { ...item }
    a.key = index + 1
    newArrUser.push(a)
  }
  )
  let data = newArrUser;
// hiển thị 9 dòng
const pagination = {
  pageSize: 8, // Hiển thị 9 dòng trên mỗi trang
};

  // tìm user, k tim thay thi thong bao
  let [nameInput, setNameInpput] = useState("")
  let handelonchange = (e) => {
    setNameInpput(e.target.value)
  }
  let [user, setUser] = useState()
  let userTam = []
  useEffect(() => {
    handleFindUser()
  }
  ,[arrUser])
  let handleFindUser = () => {
    let index = newArrUser.findIndex((item) => {
      return item.taiKhoan == nameInput
    }
    );
    if(nameInput==""){
      document.querySelector(".notify_find_user").style.display = "none"
      return
    }
    if (index == -1) {
      document.querySelector(".notify_find_user").style.display = "block"
      setUser(false)
    } else {
      userTam.push(newArrUser[index])
      setUser(userTam)
      document.querySelector(".notify_find_user").style.display = "none"
    }
  }


  // thêm người dùng
  let notify = useContext(NotifyContext)
  let userLocal = getLocalStorage("userMovie0967146")
  let tokenUser = userLocal.accessToken
  let handleAddUser = () => {
    document.querySelector(".popup_add_user").style.display = "block"
  }
  // quyết định có làm lệnh trong onSubmit và reRender khi nhấn button sửa không
  let { handleSubmit, handleChange, setFieldValue, values, errors, handleBlur, touched } = useFormik(
    {
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "",
        hoTen: ""
      },
      onSubmit: (values) => {
        axios({
          url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
          method: "POST",
          data: values,
          headers: {
            Authorization: `Bearer ${tokenUser}`,
            TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsIm5iZiI6MTY5ODY4NTIwMCwiZXhwIjoxNzI1Mjk2NDAwfQ.CPY1b9IiMcklQZ9hjqIzrdiOlQ5YnV4VpzGu_yZr7G0"
          }
        })
          .then((res) => {
            notify("Thêm thành công")
          })
          .catch((err) => {
            notify(err.response.data.content)
          });

      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng không bỏ trống"),
        matKhau: Yup.string().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/, "Mật khẩu có ít nhất 8 ký tự và Bao gồm: chữ hoa, chữ thường, số").required("Vui lòng không bỏ trống"),
        email: Yup.string().email("Vui lòng kiểm tra định dạng email").required("Vui lòng không bỏ trống"),
        soDt: Yup.string().matches(/^(0[2|3|4|5|6|7|8|9]{1})([0-9]{8,9})$/, "Vui lòng nhập đúng số điện thoại").required("Vui lòng không bỏ trống"),
        maLoaiNguoiDung: Yup.string().required("Vui lòng không bỏ trống"),
        hoTen: Yup.string().required("Vui lòng không bỏ trống"),
      })
    }
  )


  // Xóa người dùng
  let handelDeletUser = (taiKhoan) => {
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${tokenUser}`,
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsIm5iZiI6MTY5ODY4NTIwMCwiZXhwIjoxNzI1Mjk2NDAwfQ.CPY1b9IiMcklQZ9hjqIzrdiOlQ5YnV4VpzGu_yZr7G0"
      }
    })
      .then((res) => {
        notify("Xóa thành công")
      })
      .catch((err) => {
        console.log(err)
        notify(err.response.data.content)

      });
  }


  // Sửa user 
  // reRender
  let [userEdit, setUserEdit] = useState(
    {
      taiKhoan: ""
      , matKhau: ""
      , hoTen: ""
      , email: ""
      , soDt: ""
      , maLoaiNguoiDung: ""
    }
  )
  let handelEditUser = (taiKhoan) => {
    let index = arrUser.findIndex((user) => {
      return user.taiKhoan == taiKhoan
    }
    );
    let userEditTam = ""

    if (index !== -1) {
      userEditTam = { ...arrUser[index] }
    } else { console.log("tài khoản không trùng") }
    
    for (let i in userEditTam) {
      if (i === "soDT") {
        userEditTam["soDt"] = userEditTam[i]
        delete userEditTam[i]
      }
    }
    setUserEdit(userEditTam)
    document.querySelector(".popup_add_user2").style.display = "block"
  }




  // nút quay lại
  let handleBack = () => {
    document.querySelector(".popup_add_user").style.display = "none"
  }



  return (
    <div className='usManager'>
      <button className='add_user py-2 px-5 rounded bg-blue-600 text-white hover:bg-blue-700' onClick={handleAddUser}>Thêm người dùng</button>
      <NavLink to={"/"}> 
       <button className=' py-2 px-5 rounded  text-black hover:text-blue-700 button_back_home_page' onClick={handleAddUser} >Trở về Trang Chủ</button>

      </NavLink>
      {/* tìm người dùng */}
      <div className='flex items-center  space-x-2'>
        <div className='w-11/12'>
          <InputCustom className='mt-0 mb-2 ' onChange={handelonchange} placeholder={"Nhập tên tài khoản"} />
        </div>
        <button className='find_user  px-5 rounded bg-blue-600 text-white hover:bg-blue-700  h-10 ' onClick={handleFindUser}>Tìm</button>
      </div>
      <p className='text-red-600 hidden notify_find_user'>Không có tài khoản này </p>

      {/* ant layout table: hiển thị danh sách người dùng có điều kiện  */}
      <Table className='table_user' columns={columns} dataSource={user ? user : data} pagination={pagination} />

      {/* layout popup */}
      <div className='popup_add_user '>
        <p className='w-full text-center font-bold text-xl text-blue-600' >Tạo Tài Khoản</p>
        <form onSubmit={handleSubmit}>
          <InputCustom touched={touched.taiKhoan} onBlur={handleBlur} value={values.taiKhoan} onChange={
            (e) => {
              handleChange(e);
            }}
            className='mt-0 mb-2 ' name={"taiKhoan"} label={"Tài khoản"} placeholder={"Nhập tên tài khoản"} />
          {errors.taiKhoan && touched.taiKhoan ? (<p className='text-sm text-red-500' >{errors.taiKhoan} </p>) : null}
          <InputCustom touched={touched.matKhau} onBlur={handleBlur} value={values.matKhau} onChange={
            (e) => {
              handleChange(e);

            }} className='mt-0 mb-2 ' name={"matKhau"} label={"Mật khẩu"} placeholder={"Nhập tên Mật khẩu"} />
          {errors.matKhau && touched.matKhau ? (<p className='text-sm text-red-500' >{errors.matKhau} </p>) : null}
          <InputCustom touched={touched.hoTen} onBlur={handleBlur} value={values.hoTen} onChange={
            (e) => {
              handleChange(e);

            }} className='mt-0 mb-2 ' name={"hoTen"} label={"Họ Tên"} placeholder={"Nhập tên Họ Tên"} />
          {errors.hoTen && touched.hoTen ? (<p className='text-sm text-red-500' >{errors.hoTen} </p>) : null}

          <InputCustom touched={touched.email} onBlur={handleBlur} value={values.email} onChange={
            (e) => {
              handleChange(e);

            }} className='mt-0 mb-2 ' name={"email"} label={"Email"} placeholder={"Nhập tên Email"} />
          {errors.email && touched.email ? (<p className='text-sm text-red-500' >{errors.email} </p>) : null}

          <InputCustom touched={touched.soDt} onBlur={handleBlur} value={values.soDt} onChange={
            (e) => {
              handleChange(e);

            }} className='mt-0 mb-2 ' name={"soDt"} label={"Số điện thoại"} placeholder={"Nhập tên Số điện thoại"} />
          {errors.soDt && touched.soDt ? (<p className='text-sm text-red-500' >{errors.soDt} </p>) : null}

          <div>
            <label htmlFor="" className='font-semibold'>Loại người dùng</label>
            <select
              onChange={(e) => {
                setFieldValue("maLoaiNguoiDung", e.target.value);

              }}
              value={values.maLoaiNguoiDung}
              name='maLoaiNguoiDung'
              className='bg-gray-50 border border-gray-300 rounded p-2.5 w-full mt-2' >
              <option value="">Chọn loại người dùng</option>
              <option value="KhachHang">Khách Hàng</option>
              <option value="QuanTri">Quản Trị</option>
            </select>
            {errors.maLoaiNguoiDung && touched.maLoaiNguoiDung ? (<p className='text-sm text-red-500' >{errors.maLoaiNguoiDung} </p>) : null}

          </div>

          {/* foot popup */}
          <div className='flex align-items-center justify-between mt-5 '>
            <NavLink onClick={handleBack} className="text-blue-500"><LeftOutlined /><LeftOutlined /> Trở lại</NavLink>

            <div className='space-x-1'>
              <button type='submit' className=' py-2 px-5 rounded bg-blue-600 text-white hover:bg-blue-700' >Thêm</button>
              {/* <button type='submit' className=' py-2 px-5 rounded bg-blue-600 text-white hover:bg-blue-700' >Lưu</button> */}
            </div>
          </div>

        </form>


      </div>

      {/* layout update */}
      <FormUpdateUs userEdit={userEdit} />

    </div>
  )
}

export default UsManager