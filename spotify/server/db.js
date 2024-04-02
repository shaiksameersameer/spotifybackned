const mongoose = require('mongoose');

// Update the connection options
const options = {
  useNewUrlParser: true, // This is no longer needed
  useUnifiedTopology: true // This is no longer needed
};

// Connect to MongoDB using the updated options
mongoose.connect('mongodb://localhost:27017/your_database', options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
