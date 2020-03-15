const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
});
