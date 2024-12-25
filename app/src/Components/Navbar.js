import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DropDown from './Dropmenu'
export const Navbar = () => {
    const cartItems = useSelector(store => store.cart.items)
    return (
        <>
            <div className='container shadow-sm p-3 mb-3 bg-light rounded'>
                <div className='d-flex justify-content-between'>
                    <Link to={'/'} style={{ textDecoration: 'none' }}><h4>Home</h4></Link>
                    <div className='d-flex gap-3'>
                        <DropDown></DropDown>

                        <Link to={'/cart'} style={{ textDecoration: 'none' }}><h4>Cart-({cartItems.length})</h4></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
