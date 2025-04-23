const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({message: 'Hello World!'});
});


app.post("/api/greet", async (req, res) => {
    const { name } = req.body;
    res.status(200).json({ message: `Hello ${name}` });
});

app.listen(process.env.PORT , () => console.log('Server is running'));