import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from './useFetch'
import axios from 'axios'

export const Update = () => {
  const id = useParams()
  // console.log(id.id)
  const val = useFetch("http://localhost:8080/alldata")
  const rdata = val.filter((x) => x._id === id.id)
  const [fdata, setFdata] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: ''
  })
  useEffect(() => {
    setFdata({ ...fdata, ...rdata })
  }, [val])
  function handleSubmit(e) {
    e.preventDefault()
  }
  const nav = useNavigate()
  async function handleClick() {
    const abc = Object.assign({}, fdata[0])
    const newdata = await axios.put("http://localhost:8080/update/" + abc._id, abc)
    // console.log(newdata)
    if (newdata.data.success === true) {
      window.alert(newdata.data.message)
    }
    nav('/admin')
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
                    <td><input type='text' required name='title' value={fdata[0]?.title} onChange={(e) => { setFdata({ ...fdata[0], [e.target.name]: e.target.value }) }}></input></td>
                  </tr>
                  <tr>
                    <td ><label className='fw-bold fs-5'>Price : </label></td>
                    <td><input type='text' required name='price' value={fdata[0]?.price} onChange={(e) => { setFdata([{ ...fdata[0], [e.target.name]: e.target.value }]) }}></input></td>
                  </tr>
                  <tr>
                    <td><label className='fw-bold fs-5'>Description : </label></td>
                    <td><input type='text' required name='description' value={fdata[0]?.description} onChange={(e) => { setFdata({ ...fdata[0], [e.target.name]: e.target.value }) }}></input></td>
                  </tr>
                  <tr>
                    <td><label className='fw-bold fs-5'>Category : </label></td>
                    <td><input type='text' required name='category' value={fdata[0]?.category} onChange={(e) => { setFdata({ ...fdata[0], [e.target.name]: e.target.value }) }}></input></td>
                  </tr>
                  <tr>
                    <td><label className='fw-bold fs-5'>Image : </label></td>
                    <td><input type='text' required name='image' value={fdata[0]?.image} onChange={(e) => { setFdata({ ...fdata[0], [e.target.name]: e.target.value }) }}></input></td>
                  </tr>
                  <tr>
                    <td><label className='fw-bold fs-5'>Rating : </label></td>
                    <td><input type='number' required name='rating' value={fdata[0]?.rating} onChange={(e) => { setFdata({ ...fdata[0], [e.target.name]: e.target.value }) }}></input></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-lg-4 col-md-3'></div>
          </div>
          <div className='frm'>
            <button className='btn btn-primary' onClick={handleClick}>Submit</button>
          </div>
        </form>
      </div >
    </>
  )
}
