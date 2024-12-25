import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Adminlog = () => {
    const [user, setUser] = useState({
        name: '',
        password: '',
    })
    const nav = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        if (user.name && user.password) {
            nav('/admin')
        }
    }
    return (
        <>
            <div className='container border border-1 rounded mb-3 '>
                <form onSubmit={handleSubmit}>
                    <div className='row mt-3 text-center'>
                        <div className='col-lg-4'></div>
                        <div className='col-lg-4'>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td><label className='fw-bold fs-5'>Email :</label></td>
                                        <td><input type='email' required name='name' onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }}></input></td>
                                    </tr>
                                    <tr>
                                        <td><label className='fw-bold fs-5'>Password :</label></td>
                                        <td><input type='password' required name='password'  onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }}></input></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='mb-3'>
                                <button className='btn btn-success'>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
