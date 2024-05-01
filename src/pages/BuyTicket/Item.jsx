import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { handelAddToCartSlice, handelAddToTicketSlice, handelDeletteCartSlice, handelRemoveToTicketSlice } from '../../redux/slice/arrPhongVeSlice';
import { useParams } from 'react-router-dom';
// import { getLocalStorage } from '../../../utils/util';
import { number } from 'yup';


export default function Item() {
    let { danhSachGhe } = useSelector((state) => {
        return state.arrPhongVeSlice.arrPhongVe
    }
    )


    let dispatch = useDispatch()
    let { maLichChieu } = useParams()

    // let a=11
    // if (0<a & a<10) {
    //     console.log("A")
    // }
    // if (10<a & a<20) {
    //     console.log("B")
    // }

    let handelChangeColor = (ghe) => {
        const divElement = document.getElementById(`${ghe.maGhe}`);
        const className = divElement.className

        if (className == "ghe_chua_dat") {

            document.getElementById(ghe.maGhe).classList.add("ghe_dang_dat");
            
            // đối tên ghế thêm vào cart
            let gheNum = { ...ghe }
            let tenGheNum = Number(gheNum.tenGhe)
            let tenGheString = ghe.tenGhe[ghe.tenGhe.length - 1]
            if (tenGheString == "0") {
                tenGheString = `10`

            }
            if (0 < tenGheNum & tenGheNum <= 10) {
                tenGheString="A"+tenGheString
            }
            if (10 < tenGheNum & tenGheNum <= 20) {
                tenGheString="B"+tenGheString
            }
            if (20 < tenGheNum & tenGheNum <= 30) {
                tenGheString="C"+tenGheString
            }
            if (30 < tenGheNum & tenGheNum <= 40) {
                tenGheString="D"+tenGheString
            }
            if (40 < tenGheNum & tenGheNum <= 50) {
                tenGheString="E"+tenGheString
            }
            if (50 < tenGheNum & tenGheNum <= 60) {
                tenGheString="F"+tenGheString
            }
            if (60 < tenGheNum & tenGheNum <= 70) {
                tenGheString="J"+tenGheString
            }
            if (70 < tenGheNum & tenGheNum <= 80) {
                tenGheString="H"+tenGheString
            }
            if (80 < tenGheNum & tenGheNum <= 90) {
                tenGheString="I"+tenGheString
            }
            if (90 < tenGheNum & tenGheNum <= 100) {
                tenGheString="J"+tenGheString
            }
            if (100 < tenGheNum & tenGheNum <= 110) {
                tenGheString="K"+tenGheString
            }
            if (110 < tenGheNum & tenGheNum <= 120) {
                tenGheString="L"+tenGheString
            }
            if (120 < tenGheNum & tenGheNum <= 130) {
                tenGheString="M"+tenGheString
            }
            if (130 < tenGheNum & tenGheNum <= 140) {
                tenGheString="N"+tenGheString
            }
            if (140 < tenGheNum & tenGheNum <= 150) {
                tenGheString="O"+tenGheString
            }
            if (150 < tenGheNum & tenGheNum <= 160) {
                tenGheString="P"+tenGheString
            }
            gheNum.tenGheString=tenGheString
            dispatch(handelAddToCartSlice(gheNum))

            // thêm ghế vào danh sách vé
            let payload = { ghe, maLichChieu }
            dispatch(handelAddToTicketSlice(payload))



        } else {
            document.getElementById(ghe.maGhe).classList.remove("ghe_dang_dat");

            // xóa ghế khỏi ds cart
            dispatch(handelDeletteCartSlice(ghe))

            // xóa ghế khỏi danh sách vé
            let payload = { ghe, maLichChieu }
            dispatch(handelRemoveToTicketSlice(payload))
        }
    }


    let renderTenGhe = (ghe) => {
        let gheNum = { ...ghe }
        let tenGheNum = Number(gheNum.tenGhe)
        let tenGheString = ghe.tenGhe[ghe.tenGhe.length - 1]
        if (tenGheString == "0") {
            tenGheString = `10`
        }
        if (0 < tenGheNum & tenGheNum <= 10) {
            tenGheString="A"+tenGheString
        }
        if (10 < tenGheNum & tenGheNum <= 20) {
            tenGheString="B"+tenGheString
        }
        if (20 < tenGheNum & tenGheNum <= 30) {
            tenGheString="C"+tenGheString
        }
        if (30 < tenGheNum & tenGheNum <= 40) {
            tenGheString="D"+tenGheString
        }
        if (40 < tenGheNum & tenGheNum <= 50) {
            tenGheString="E"+tenGheString
        }
        if (50 < tenGheNum & tenGheNum <= 60) {
            tenGheString="F"+tenGheString
        }
        if (60 < tenGheNum & tenGheNum <= 70) {
            tenGheString="J"+tenGheString
        }
        if (70 < tenGheNum & tenGheNum <= 80) {
            tenGheString="H"+tenGheString
        }
        if (80 < tenGheNum & tenGheNum <= 90) {
            tenGheString="I"+tenGheString
        }
        if (90 < tenGheNum & tenGheNum <= 100) {
            tenGheString="J"+tenGheString
        }
        if (100 < tenGheNum & tenGheNum <= 110) {
            tenGheString="K"+tenGheString
        }
        if (110 < tenGheNum & tenGheNum <= 120) {
            tenGheString="L"+tenGheString
        }
        if (120 < tenGheNum & tenGheNum <= 130) {
            tenGheString="M"+tenGheString
        }
        if (130 < tenGheNum & tenGheNum <= 140) {
            tenGheString="N"+tenGheString
        }
        if (140 < tenGheNum & tenGheNum <= 150) {
            tenGheString="O"+tenGheString
        }
        if (150 < tenGheNum & tenGheNum <= 160) {
            tenGheString="P"+tenGheString
        }
        gheNum.tenGheString=tenGheString
        return gheNum.tenGheString

    }


    // let handelAddTicket = (ghe) => {


    // }



    return (
        <div className='item'>
            {danhSachGhe?.map((ghe, index) => {


                return (
                    <div style={{ color: "white" }} className='so_ghe px-1 ' >
                        <button

                            onClick={() => {
                                handelChangeColor(ghe);
                                // handelAddTicket(ghe)
                            }}
                            className={ghe.daDat ? "ghe_da_dat" : "ghe_chua_dat"}
                            id={ghe.maGhe}
                        >
                            {/* {index + 1} */}
                            {renderTenGhe(ghe)}
                        </button>


                    </div>
                )
            })}


        </div>
    )
}

