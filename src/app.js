const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

const authRoutes = require('./routes/authRoutes.js')
const motoristasRoutes = require('./routes/motoristasRouter.js');
const viaturasRoutes = require('./routes/viaturasRoutes.js')
app.use('/viaturas', viaturasRoutes);
app.use('/motoristas', motoristasRoutes)
app.use('/auth', authRoutes);

module.exports = app;