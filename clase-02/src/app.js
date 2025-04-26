const express = require('express');
require('dotenv').config();
/* --- */
const db = require('./database/models');
const {carRoute} = require('./routes');

const app = express();

app.use(express.json())
app.use('/card', carRoute);


const PORT = process.env.PORT || 3005;
app.listen(PORT, async () => {
    console.log(`Ready ${PORT}`)
    await db.sequelize.sync({ force: false });
});