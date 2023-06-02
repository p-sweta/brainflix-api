const express = require('express');
const app = express();
const cors = require("cors");
const videosRoutes = require('./routes/videos');

require('dotenv').config();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use(express.static('public')); 

app.use('/', videosRoutes);

app.listen(PORT || 8000, () => {
    console.log(`Running on port ${PORT}`)
})