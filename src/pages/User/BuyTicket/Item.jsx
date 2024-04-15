import React, { Component} from 'react'
import { connect } from 'react-redux'





class Item extends Component {
    handelChangeColor=(ghe) => { 
        if(!ghe.daDat){

            document.getElementById(ghe.soGhe).classList.add("ghe_dang_dat");
        }
     }
    render() {
        let numberSheatArr = this.props.sheatArr.danhSachGhe
        
        return (
            <div className='col-12 row hang_ghe' style={{ color: "yellow" }}>
                <div className='col' style={{ fontWeight: "bold" }}>{this.props.sheatArr.hang}</div>

                {numberSheatArr.map((item, index) => {


                    return (
                        <div style={{ color: "white" }} className='so_ghe col'>
                            <button
                                
                                onClick={() => {
                                    this.props.handelAddToCart(item);
                                    this.handelChangeColor(item);
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
   
}

let mapDispatchToProps = (dispatch) => {
    return {
        handelAddToCart: (ghe) => {
            let action = {
                type: "Add",
                payload: ghe
            }
            dispatch(action)
        },
        // handelChangeColor: (ghe) => {
        //     let action = {
        //         type: "Change",
        //         payload: ghe
        //     }
        //     dispatch(action)
        // }



    }
}

export default connect(null, mapDispatchToProps)(Item)