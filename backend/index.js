//configure the express server and connect to mongodb

const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const productRoutes=require('./routes/productRoutes')

const app=express();

//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/products',productRoutes);

//database connection
mongoose.connect('mongodb://localhost:27017/crud-products',
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(()=>{
        console.log('Connected to MongoDB');
        app.listen(3000,()=>{
            console.log('Server is running on 3000');
        })
    })
    .catch((err)=>console.log(err));

