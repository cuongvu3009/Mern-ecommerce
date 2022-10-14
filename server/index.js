require('dotenv').config();
const express = require('express');
const app = express();

//	packages
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

//	routes
const authRoutes = require('./routes/auth');

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URI);
};

//	middleware
app.use(express.json());
app.use(cookieParser());

//	routes
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/api/v1/auth', authRoutes);

//	error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  connectDB();
  console.log('DB connected');
  console.log(`Server listening on port ${PORT}`);
});
