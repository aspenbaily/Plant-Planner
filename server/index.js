//to start this server (after configuring express), use the npm start command
const express = require('express');
const app = express();
const cors = require('cors');
const plantsRoute = require('./routes/PlantRoutes');
const newPlantRoutes = require('./routes/NewPlantRoutes');
const ContactRoutes = require('./routes/ContactRoutes');
const PORT = 8080;


// app.use(cors());

app.use(express.json());
app.use(cors());

app.use('/plants', plantsRoute);
app.use('/plantresults', newPlantRoutes);
app.use('/contact', ContactRoutes);


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});