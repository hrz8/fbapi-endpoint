const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const offset = (page > 1) ? (page - 1) * limit : 0;
    const user_id = "10157447552168547";
    const access_token = "EAADE7Q9LRIUBACZBsv1JzLoLCb0ZC0DVTh2kvpZCqxvGJqorZCFXiRw5zTnuCK1QeoL9ZBCleGPsR5jAy5VRK3tsJRUZAhUFaf97xxUYVG9pW9pDg2ZB1hW2N2oKUrBXY4dTn1JPSxybkTyoVqlbhN8Fi6kqoZC8uR8ZD";
    try {
        const result = await axios.get(`https://graph.facebook.com/v6.0/${user_id}/feed?fields=attachments{description,title,unshimmed_url,media_type,type},created_time,type,id&limit=${limit}&offset=${offset}&access_token=${access_token}`);
        res.json({
            data: result.data.data
        });

    }
    catch(err) {
        res.status(400).json(err);
    }
})

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
});
