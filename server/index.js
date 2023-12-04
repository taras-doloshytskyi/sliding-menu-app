const express = require('express');
const cors = require('cors');
const fs = require('fs');

const logo1URL = '/assets/logo1.png';
const logo2URL = '/assets/logo2.png';
const logo3URL = '/assets/logo3.png';
const logo4URL = '/assets/logo4.png';
const addURL = '/assets/add.png';

const app = express();
const host = 'localhost';
const port = 3001;

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/assets', express.static('assets'));

const buttonsData = [
  { id: 1, name: 'Home', icon: logo1URL },
  { id: 2, name: 'Settings', icon: logo2URL },
  { id: 3, name: 'Screen1', icon: logo3URL },
  { id: 4, name: 'Screen2', icon: logo4URL },
  { id: 5, name: 'Screen3', icon: addURL },
];

app.get('/api/buttons', (req, res) => {
  res.json({ buttons: buttonsData });
});

app.listen(port, host, () => {
  console.log(`Server is running on port ${port}`);
});