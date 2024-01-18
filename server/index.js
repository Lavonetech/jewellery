const express = require('express');
const https = require('https');
const fs = require('fs');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());

const corsOptions = {
  origin:('*')
};
app.use(cors(corsOptions));

const path = require('path');

const productRouter = require('./routers/productRoutes');
const userRouter = require('./routers/userRoutes');
const orderRouter = require('./routers/orderRoutes');

app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 3000;

// HTTPS setup
const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'ssl', 'key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'ssl', 'cert.pem')),
};

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  // Create an HTTPS server
  https.createServer(options, app).listen(PORT, () => {
    console.log(`Starting from server port: ${PORT}`);
  });
}).catch(err => console.log(`${err} did not connect`));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);
