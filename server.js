const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetworkdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});