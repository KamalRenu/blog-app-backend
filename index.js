const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 3001;

//Routes
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const categoryRouter = require('./routes/categories');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//DB Connection
mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true})
const connection = mongoose.connection;
connection.on('open', () => console.log('MongoDB Connected'));

//Routes
app.use('/api', authRouter);
app.use('/api',userRouter);
app.use('/api/post', postRouter);
app.use('/api/category', categoryRouter);

app.listen(PORT,() => console.log(`Server running on port ${PORT}`));