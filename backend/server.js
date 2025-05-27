const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const patientAuthRoutes = require('./routes/patientAuth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/patient', patientAuthRoutes); // Main route

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
