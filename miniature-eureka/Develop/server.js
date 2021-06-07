const fs = require('fs');
const express = require('express');

const path = require('path');
const router = require('express').Router();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });

// app.get('/api/notes', (req, res) => {
// //use FS library to read db.json file in db folder... take data to send back 
//   res.json(notes);
// });

// app.post('/api/notes', (req, res) => {
// //user saves new note into database...
//   // res.json(createNote);
// });
  
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });