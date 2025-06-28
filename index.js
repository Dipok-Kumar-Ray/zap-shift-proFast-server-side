const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

//Middlaware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Percel Server is running')
})


app.listen(port, ()=> {
    console.log(`Server is Listenign on port : ${port}`);
})
