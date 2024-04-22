import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { handelAddToCartSlice, handelAddToTicketSlice, handelDeletteCartSlice, handelRemoveToTicketSlice } from '../../../redux/slice/arrPhongVeSlice';
import { useParams } from 'react-router-dom';
import { getLocalStorage } from '../../../utils/util';


export default function Item() {
    let {danhSachGhe}=useSelector((state) => {
        return state.arrPhongVeSlice.arrPhongVe
    }
    )
   

    let dispatch = useDispatch()
    let { maLichChieu } = useParams()



    let handelChangeColor = (ghe) => {
        const divElement = document.getElementById(`${ghe.maGhe}`);
        const className = divElement.className

        if (className == "ghe_chua_dat") {

            document.getElementById(ghe.maGhe).classList.add("ghe_dang_dat");
            dispatch(handelAddToCartSlice(ghe))

            let payload = { ghe, maLichChieu }
            dispatch(handelAddToTicketSlice(payload))



        } else {
            document.getElementById(ghe.maGhe).classList.remove("ghe_dang_dat");
            dispatch(handelDeletteCartSlice(ghe))

            let payload = { ghe, maLichChieu }
            dispatch(handelRemoveToTicketSlice(payload))
        }
    }


    let renderTenGhe = (tenGhe) => {
        let newTenGhe = tenGhe[tenGhe.length - 1]
        if (newTenGhe == "0") {
            newTenGhe = `10`

        }
        return newTenGhe

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
                            {renderTenGhe(ghe.tenGhe)}
                        </button>


                    </div>
                )
            })}


        </div>
    )
}

