const express = require('express');
const cors = require('cors');
const viaturasRoutes = require('./routes/viaturasRoutes.js')
const motoristasRoutes = require('./routes/motoristasRouter.js');
const authRoutes = require('./routes/authRoutes.js')

const app = express();

app.use(express.json());
app.use(cors())

app.use('/viaturas', viaturasRoutes);
app.use('/motoristas', motoristasRoutes)
app.use('/auth', authRoutes);

module.exports = app;