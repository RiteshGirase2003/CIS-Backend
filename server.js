const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Clifford')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB', error));

app.use('/api', studentRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
