const express = require('express');
const app = express();

require("dotenv").config(); //configuración de variables de entorno

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({title:'title'})
});

const PORT = process.env.PORT || 3000; //configuracion del puerto

app.listen(PORT,()=>{ 
    console.log(PORT)
})

