const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB using the environment variable
mongoose.connect('mongodb+srv://lkeenan:5GNjppdsJSlkPytU@cluster0.wz6e6r3.mongodb.net/personal_finance_app?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a schema and model
const purchaseSchema = new mongoose.Schema({
  what: String,
  where: String,
  categorized: String,
  price: String,
  when: String
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

// POST route to save data to MongoDB
app.post('/api/purchases', async (req, res) => {
  try {
    const purchase = new Purchase(req.body);
    await purchase.save();
    res.status(201).send(purchase);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET route to retrieve data from MongoDB
app.get('/api/purchases', async (req, res) => {
  try {
    const purchases = await Purchase.find({});
    res.status(200).send(purchases);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
