const express = require("express");  
const app = express();  
require('dotenv').config(); 
app.use(express.json()); 
const cors = require("cors"); 
app.use(cors());
app.options("*", cors());


const port = 3000;  

const conn = require("./model/conn/index.js");

conn(); 

app.get("/", (req, res) => {
    res.status(200).json({message: "GCB API"});
})

const gcbRouters = require("./routers/gcb.router");
app.use('/gcb',gcbRouters);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost${port}`);
})