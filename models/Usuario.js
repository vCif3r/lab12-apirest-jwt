const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  avatar: {type: String, default: 'https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg'},
  name: { type: String, required: true},
  lastName: { type: String, required: true},
  roles: {
    type: [String],
    enum: ["admin", "student", "teacher"],
    default: ["student"], // Valor predeterminado para el campo roles
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Usuario', usuarioSchema);