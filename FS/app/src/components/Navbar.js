import React from 'react'
import { Link } from 'react-router-dom'
// import { useOnline } from './useOnline'
export const Navbar = () => {
  // const isOnline = useOnline()

  // console.log(isOnline)
  return (
    <>
      <div className=" container shadow-none p-3 mb-3 bg-light rounded d-flex gap-3 align-items-center">
        <Link to={'/'} style={{ textDecoration: 'none' }}> <h3>Home</h3></Link>
        <h3>User</h3>
        {/* <h4>Status : {isOnline ? <span style={{color:'green'}}>online</span> : <span style={{color:'red'}}>offline</span>}</h4> */}
      </div>
    </>
  )
}
