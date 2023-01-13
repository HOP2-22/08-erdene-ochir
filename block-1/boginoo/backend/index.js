const express = require('express')
const mongoose = require('mongoose')
const connect = require("./db")
const router = require("./router/router")
const cors = require("cors")

const PORT = 8000
const app = express();

connect();

app.use(cors());
app.use(express.json());

app.use('/', router)
 
app.listen(PORT, () => {
    `Server is running at localhost:$(PORT)`;
})
