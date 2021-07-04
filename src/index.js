const express = require('express');
const cors = require('cors');
const PORT = 3333;
const temperature = require('./db/temperature.json');
const precipitation = require('./db/precipitation.json');
const { getDataByDateRange } = require('./utils');

const app = express();

app.use(cors());

app.get('/temperature', (req, res) => {
    const { start, end } = req.query;

    res.json({ data: getDataByDateRange(temperature, start, end) });
});

app.get('/precipitation', (req, res) => {
    const { start, end } = req.query;

    res.json({ data: getDataByDateRange(precipitation, start, end) });
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT} port`);
});
