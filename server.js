const express = require ('express');
require ('./config/connect.js');
const vehroute = require ('./routes/vehicule.js');
const cors = require ('cors');
const app = express ();
app.use(express.json());
app.use(cors());
x
app.use('/vehicule', vehroute);


app.listen (3000, ()=> {
    console.log('server open');
});

