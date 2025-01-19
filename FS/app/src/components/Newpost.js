import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const Newpost = () => {
    const [data, setData] = useState({
        fname: "",
        content: "",
        likes: 0,
        comments: []
    })
    const nav = useNavigate()
    // console.log(data)
    async function handleSubmit(e) {
        e.preventDefault()
        //   console.log(data)
        let data1 = await axios.post('http://localhost:8080/feed', data)
        // console.log(data1?.data?.success)
        if (data1?.data?.success) {
            window.alert('posted successfully')
            setData({
                fname: "",
                content: "",
            })
            nav('/')
        }
    }
    return (
        <>
            <div className='container text-center border rounded'>
                <form className='border rounded p-3 m-3'>
                    <div className='mt-3'>
                        <label>User Name</label>
                        <input type='text' name='fname' value={data.fname} onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}></input>
                    </div>
                    <div>
                        <label>Content</label>
                        <input type='text' name="content" value={data.content} onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}></input>
                    </div>
                    {/* <div>
                        <label>Likes</label>
                        <input type='number' name='likes' onChange={(e) => { setData({ ...data, [e.target.name]: parseInt(e.target.value) }) }}></input>
                    </div> */}
                    {/* <div>
                        <label>Comments</label>
                        <input type='text' name='comments' onChange={(e) => { setData({ ...data, [e.target.name]: [e.target.value] }) }}></input>
                    </div> */}
                    <button onClick={handleSubmit} className='btn btn-info'>Post</button>
                </form>
            </div>
        </>
    )
}
