const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');
const authMiddleware = require('../middleware/authMiddleware');

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
  const usuario = new Usuario(req.body);
  console.log(usuario);
  try {
    const nuevoUsuario = await usuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//ruta protegida del perfil de usuario
router.get('/profile/:id', authMiddleware ,async (req, res) => {
    try{ 
        const user = await Usuario.findById(req.params.id);
        if (!user) {
          return res.status(404).json({ message: "user not found" });
        }
        res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
})

module.exports = router;