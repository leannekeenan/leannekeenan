const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dnd-characters', { useNewUrlParser: true, useUnifiedTopology: true });

// Define character schema
const characterSchema = new mongoose.Schema({
  name: String,
  affiliation: String,
  location: String,
  details: String
});

const Character = mongoose.model('Character', characterSchema);

// API to get characters
app.get('/api/characters', async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API to add a new character
app.post('/api/characters', async (req, res) => {
  const newCharacter = new Character(req.body);
  try {
    const savedCharacter = await newCharacter.save();
    res.status(201).json(savedCharacter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
