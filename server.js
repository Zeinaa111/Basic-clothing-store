const mongoose = require('mongoose');
require('dotenv').config();  
const cors = require('cors');  

const dbURI = process.env.MONGO_URI; 


mongoose.connect(dbURI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log('MongoDB Connection Error:', err);
  });

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());  


const Product = require('./models/Product');


app.get('/products', async (req, res) => {
  try {
    const products = await Product.find(); 
    res.json(products); 
  } catch (err) {
    res.status(500).json({ message: 'Server error while fetching products' });
  }
});


app.post('/products', async (req, res) => {
  const { name, price, description } = req.body; 
  const newProduct = new Product({ name, price, description });

  try {
    const savedProduct = await newProduct.save(); 
    res.status(201).json(savedProduct); 
  } catch (err) {
    res.status(500).json({ message: 'Failed to save product' });
  }
});


app.all('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
