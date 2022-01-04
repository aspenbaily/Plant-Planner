//to start this server (after configuring express), use the npm start command
const express = require('express');
const app = express();
const cors = require('cors');
const plantsRoute = require('./routes/PlantRoutes');
const newPlantRoutes = require('./routes/NewPlantRoutes');
const { createPool } = require('mysql');
const PORT = 8080;
const mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
})

connection.connect()

connection.query('SELECT * from plants', function (err, rows, fields) {
  if (err) throw err

  rows.forEach(row => {
      
      console.log(`id = ${row.id} , name = ${row.name}`)
  });
})

connection.end()

// app.use(cors());

app.use(express.json());
app.use(cors());

app.use('/plants', plantsRoute);
app.use('/plantresults', newPlantRoutes);


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});