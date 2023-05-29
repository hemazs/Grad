require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productsRoutes = require('./routes/products');
const studentsRoutes = require('./routes/students');
const app = express();

app.use(express.json());

app.use('/api/products', productsRoutes);
app.use('/api/students', studentsRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to db and server listening on port ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    }
    );

