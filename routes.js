// routes/index.js
const express = require('express');
const usuariosRouter = require('./routes/studentRoutes');
const authRouter = require('./routes/authRoutes');
const router = express.Router();

// Definir grupo de rutas para /api
const apiRouter = express.Router();
apiRouter.use('/students', usuariosRouter);
router.use('/api', apiRouter);
// auth route
router.use('/auth', authRouter);

module.exports = router;