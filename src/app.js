const express = require('express');
const cors = require('cors');
const apiRoutes = require('./api');

const app = express();
app.use(cors());
app.use('/api', apiRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
