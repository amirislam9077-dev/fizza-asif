const express = require('express');
const cors    = require('cors');
const sendOrder = require('./api/send-order');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.post('/api/send-order', sendOrder);

const PORT = 4000;
app.listen(PORT, () => console.log(`Order server running on http://localhost:${PORT}`));
