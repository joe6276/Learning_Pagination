const express = require("express");
require('dotenv').config()
const cors = require("cors");
const personRouter= require('./routes/index')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/staff',personRouter)


const PORT =process.env.PORT
app.listen(PORT, () => {
  console.log(`app Listening to port ${PORT}`);
});
