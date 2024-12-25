import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const AddProd = () => {
  const nav = useNavigate()
  const [fdata, setFdata] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: ''
  })
  async function handleSubmit(e) {
    e.preventDefault()
    if (fdata.title && fdata.price && fdata.description && fdata.category && fdata.image && fdata.rating) {
      // nav('/payment')
      const data = await axios.post("http://localhost:8080/newdata", fdata)
      // console.log(data)
      if (data.data.success == true) {
        window.alert(data.data.message)
      }
      nav('/admin')
    }
  }
  return (
    <>
      <div className='container border border-1 rounded mb-3 '>
        <form className='mt-3' onSubmit={handleSubmit}>
          <div className='row '>
            <div className='col-lg-4 col-md-3'></div>
            <div className='col-lg-4 col-md-6 '>
              <table className='table'>
                <tbody>
                  <tr>
                    <td ><label className='fw-bold fs-5'>Title : </label></td>
                    <td><input type='text' required name='title' onChange={(e) => { setFdata({ ...fdata, [e.target.name]: e.target.value }) }}></input></td>
                  </tr>
                  <tr>
                    <td ><label className='fw-bold fs-5'>Price : </label></td>
                    <td><input type='text' required name='price' onChange={(e) => { setFdata({ ...fdata, [e.target.name]: e.target.value }) }}></input></td>
                  </tr>
                  <tr>
                    <td><label className='fw-bold fs-5'>Description : </label></td>
                    <td><input type='text' required name='description' onChange={(e) => { setFdata({ ...fdata, [e.target.name]: e.target.value }) }}></input></td>
                  </tr>
                  <tr>
                    <td><label className='fw-bold fs-5'>Category : </label></td>
                    <td><input type='text' required name='category' onChange={(e) => { setFdata({ ...fdata, [e.target.name]: e.target.value }) }}></input></td>
                  </tr>
                  <tr>
                    <td><label className='fw-bold fs-5'>Image : </label></td>
                    <td><input type='text' required name='image' onChange={(e) => { setFdata({ ...fdata, [e.target.name]: e.target.value }) }}></input></td>
                  </tr>
                  <tr>
                    <td><label className='fw-bold fs-5'>Rating : </label></td>
                    <td><input type='number' required name='rating' onChange={(e) => { setFdata({ ...fdata, [e.target.name]: e.target.value }) }}></input></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-lg-4 col-md-3'></div>
          </div>
          <div className='frm'>
            <button className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div >
    </>
  )
}
