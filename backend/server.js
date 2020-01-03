const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ res: 'hey' });
});

app.listen(port, () => console.log(`Backend listening on port ${port}`));
