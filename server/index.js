const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const dotenv=require('dotenv');
const cors=require("cors");


dotenv.config();
app.use(cors());
app.use(express.json())
const path = require('path');

const productRouter=require('./routers/productRoutes');
const userRouter=require('./routers/userRoutes')
const orderRouter=require('./routers/orderRoutes');

app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.static(path.join(__dirname, '../maera/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'maera', 'build', 'index.html')
    )
  );
 
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
