import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const useFetch = (url) => {
    const [data,setData]=useState([])
    async function fun1(url){
        const data=await axios.get(url)
        setData(data.data.data)
    }
    useEffect(()=>{
        fun1(url)
    },[url])
  return data
}
