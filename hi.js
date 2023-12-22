require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

// Connect to MongoDB using the connection string from .env file
mongoose.connect(process.env.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected!');
    // Additional code or operations after successful connection
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });
