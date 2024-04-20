import React, { Component} from 'react'
import { connect } from 'react-redux'


export default function Item({danhSachGhe}) {
    console.log(danhSachGhe)


    let handelChangeColor=(ghe) => { 
        if(!ghe.daDat){

            document.getElementById(ghe.soGhe).classList.add("ghe_dang_dat");
        }
     }
     return (
        <div className='item'>

            {danhSachGhe.map((item, index) => {


                return (
                    <div style={{ color: "white" }} className='so_ghe px-1 '>
                        <button
                            
                            onClick={() => {
                                // handelAddToCart(item);
                                // handelChangeColor(item);
                            }}
                            className={item.daDat ? "ghe_da_dat" : "ghe_chua_dat" }
                            id={item.soGhe}

                        >
                           {/* <input type='checkbox'  id='my-checkbox'/>  */}
                            {index + 1}
                        </button> 
                        

                    </div>
                )
            })}


        </div>
    )
}

