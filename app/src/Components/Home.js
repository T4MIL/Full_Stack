import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addItem } from './cartSlice'
export const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fun1()
  }, [])
  async function fun1() {
    let data = await axios.get("http://localhost:8080/alldata")
    // console.log(data.data.data)
    setData(data.data.data)
  }
  const dispatch = useDispatch()
  function handleAddItem(val) {
    // console.log(val)
    dispatch(addItem(val))
    
  }
  return (
    <>
      <div className='container  border border-1 rounded mb-3'>
        <div className='row mt-5'>
          {
            data.map((val, ind) => (
              <div className='col-lg-4 col-md-6 mb-3 ' >
                <div className='card shadow-sm  mb-3 bg-light rounded  text-center' style={{ width: '19rem', height: '30rem' }} id='card' key={val.id}>
                  <div className='card-body' key={val.id}>
                    <img src={val.image} className="img-fluid " alt="..." style={{ height: '18rem', width: '18rem' }} />
                    <h3 className='mt-2'>{val.title.substring(0, 11)}</h3>
                    <h5 >From  ${Math.floor(val.price)}</h5>
                    <h6 className='text-success'>Shop Now!</h6>
                    <div className='mt-3'>
                      <button className='btn btn-warning' onClick={() => handleAddItem(val)}>Add to cart</button>
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
