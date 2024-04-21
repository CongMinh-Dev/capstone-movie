import React from 'react'
import { useDispatch, } from 'react-redux'
import { handelAddToCartSlice, handelDeletteCartSlice } from '../../../redux/slice/arrPhongVeSlice';


export default function Item({ danhSachGhe }) {
    let dispatch = useDispatch()



    let handelChangeColor = (ghe) => {
        const divElement = document.getElementById(`${ghe.maGhe}`);
        const className = divElement.className

        if (className == "ghe_chua_dat") {

            document.getElementById(ghe.maGhe).classList.add("ghe_dang_dat");
            dispatch(handelAddToCartSlice(ghe))


        } else {
            document.getElementById(ghe.maGhe).classList.remove("ghe_dang_dat");
            dispatch(handelDeletteCartSlice(ghe))
        }
    }
    let handelAddToCart = (ghe) => {
    }

    let renderTenGhe = (tenGhe) => {
        let newTenGhe = tenGhe[tenGhe.length - 1]
        if (newTenGhe == "0") {
            newTenGhe = `10`

        }
        return newTenGhe

    }

    return (
        <div className='item'>
            {danhSachGhe?.map((ghe, index) => {


                return (
                    <div style={{ color: "white" }} className='so_ghe px-1 ' >
                        <button

                            onClick={() => {
                                // handelAddToCart(ghe);
                                handelChangeColor(ghe);
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

