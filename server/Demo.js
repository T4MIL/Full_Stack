const express = require('express')
const app = express()
const mndb = require('mongoose')
const cors = require('cors')
app.use(express.json())
app.use(cors())
const sch = mndb.Schema({
    title: String,
    price: String,
    description: String,
    category: String,
    image: String,
    rating: String
})
const sch1 = mndb.Schema({
    title: String,
    price: String,
    description: String,
    category: String,
    image: String,
    rating: String,
    quantity: Number,
})
const order = mndb.model('orders', sch)
const uorder = mndb.model('uorders', sch1)
app.post('/newuorder', async (req, res) => {
    const data = req.body
    uorder.insertMany(data)
    res.send({
        success: true,
        message: 'oredr placed successfully',
        data: data
    })
})
app.get('/alludata', async (req, res) => {
    const data = await uorder.find({})
    res.send({
        success: true,
        message: "data fetched successfully",
        data: data
    })
})

app.post('/newdata', async (req, res) => {
    const data = new order(req.body)
    await data.save()
    res.send({
        success: true,
        message: 'product added successfully',
        data: data
    })
})
app.get('/alldata', async (req, res) => {
    const data = await order.find({})
    res.send({
        success: true,
        message: "data fetched successfully",
        data: data
    })
})
app.delete('/del/:id', async (req, res) => {
    // console.log(req.params.id)
    const deldata = await order.deleteOne({ _id: req.params.id })
    res.send({
        success: true,
        message: 'data deleted successfully',
        data: deldata
    })
})
app.put('/update/:id',async (req, res) => {
    const updata = await order.findByIdAndUpdate(req.params.id,req.body)
    res.send({
        success:true,
        message:"updated successfully",
        data:updata
    })
})
const PORT = 8080
mndb.connect("mongodb://localhost:27017/tamil")
    .then(console.log('db connected'))

app.listen(PORT, () => {
    console.log('server connected')
})
