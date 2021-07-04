const express = require('express');
const cors = require('cors');
const PORT = 3333;
const temperature = require('./db/temperature.js');
const precipitation = require('./db/precipitation.js');
const { getDataByDateRange } = require('./utils');

const app = express();

app.use(cors());

app.get('/temperature', (req, res) => {
    const { start, end } = req.query;
    try {
        res.json({ data: getDataByDateRange(temperature, start, end) });
    } catch (error) {
        console.error(error);
    }
});

app.get('/precipitation', (req, res) => {
    const { start, end } = req.query;
    try {
        res.json({ data: getDataByDateRange(precipitation, start, end) });
    } catch (error) {
        console.error(error);
    }
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT} port`);
});
