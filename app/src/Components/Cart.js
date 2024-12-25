import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from './cartSlice'
import axios from 'axios'
export const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    // console.log(cartItems)
    const dispatch = useDispatch()
    const handleRemoveItem = (val) => {
        dispatch(removeItem(val))
    }

    async function fun1() {
        let data = await axios.post("http://localhost:8080/newuorder", cartItems)
        //   console.log(data.data.message)
        if (data.data.success == true) {
            window.alert(data.data.message)
        }
        window.location.reload()
    }
    return (
        <>

            <div className='container  border border-1 rounded mb-3'>
                <div className='row mt-5'>
                    {
                        cartItems.map((val, ind) => (
                            <div className='col-lg-4 col-md-6 mb-3 ' >
                                <div className='card shadow-sm  mb-3 bg-light rounded  text-center' style={{ width: '19rem', height: '30rem' }} id='card' key={val.id}>
                                    <div className='card-body' key={val.id}>
                                        <img src={val.image} className="img-fluid " alt="..." style={{ height: '18rem', width: '18rem' }} />
                                        <h3 className='mt-2'>{val.title.substring(0, 11)}</h3>
                                        <h5 >From  ${Math.floor(val.price)}</h5>
                                        <h6 className='text-info'>Quantity : {val.quantity}</h6>
                                        <div className='mt-3'>
                                            <button className='btn btn-danger' onClick={() => handleRemoveItem(val)}>Remove Item</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div>
                        <button className='btn btn-success mb-3' onClick={fun1}> Place Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}
