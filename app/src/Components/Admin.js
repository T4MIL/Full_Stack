import React, { useState } from 'react'
import { useFetch } from './useFetch'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const Admin = () => {
    const [data, setData] = useState([])
    const val = useFetch("http://localhost:8080/alldata")
    async function fun1(url) {
        const data = await axios.get(url)
        setData(data.data.data)
    }
    // console.log(data)
    function delFun(val) {
        const data = axios.delete("http://localhost:8080/del/" + val._id)
        window.location.reload()
    }
    return (
        <>
            <div className='container  border border-1 rounded mb-3'>
                <div className='row mt-5'>
                    <div>
                        <button className='btn btn-info' onClick={() => fun1("http://localhost:8080/alludata")}>Get user orders</button>
                    </div>
                </div>
                {data.length > 0 && <div className='row mt-3'>
                    <div className='col-lg-12'>
                        <table className='table table-bordered'>
                            <thead>
                                <h3 className='mb-4'>Order Details:</h3>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>{
                                data.map((val, ind) => (
                                    <tr>
                                        <td>{val.title}</td>
                                        <td>{val.quantity}</td>
                                        <td>{val.price * val.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                }
                <div className='row mt-5'>
                    <h3 className='mb-3' >Product Details:</h3>
                    <div className='mb-5'>
                        <button className='btn btn-info'><Link to={'/addprod'} style={{ textDecoration: 'none', color: 'black' }}>Add Products </Link></button>
                    </div>
                    {
                        val.map((val, ind) => (
                            <div className='col-lg-4 col-md-6 mb-3 ' >
                                <div className='card shadow-sm  mb-3 bg-light rounded  text-center' style={{ width: '19rem', height: '26rem' }} id='card' key={val.id}>
                                    <div className='card-body' key={val.id}>
                                        <img src={val.image} className="img-fluid " alt="..." style={{ height: '18rem', width: '18rem' }} />
                                        <h3 className='mt-2'>{val.title.substring(0, 11)}</h3>

                                        <div className='d-flex gap-2 justify-content-around mt-3'>
                                            <Link to={`/update/${val._id}`}> <button className='btn btn-warning'>Update</button></Link>
                                            <button className='btn btn-danger' onClick={() => delFun(val)}> Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
