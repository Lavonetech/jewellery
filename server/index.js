const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const dotenv=require('dotenv');
const cors=require("cors");

const corsOptions = {
    origin: 'http://maerajewellery.com',  // Add the desired IP address or domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
dotenv.config();
app.use(cors(corsOptions));
app.use(express.json())
const path = require('path');

const productRouter=require('./routers/productRoutes');
const userRouter=require('./routers/userRoutes')
const orderRouter=require('./routers/orderRoutes');

app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, () => console.log(`Starting from server port: ${PORT}`));
}).catch(err=> console.log(`${err} did not connected`));

app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')))
app.use(productRouter);
app.use(userRouter)
app.use(orderRouter);