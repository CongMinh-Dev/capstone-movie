import React from 'react'

const Nhap2 = React.memo(({ name, tang }) => {
    console.log("nhap2")
    return (
        <div>

            <p>{name}</p>


            <button className='bg-blue-600' onClick={tang}  >Tang ở Nhap2</button>

        </div>
    )
})

export default Nhap2
