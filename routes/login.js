
const { Router } = require('express');
const{ check } = require('express-validator')

const { LogearPost } = require('../config/login')
const {validarCampos} = require('../middlewares/validation-result')

const rutas = Router();

rutas.post('/login',
[
    check('correoL','El correo no es valido y es obligatorio').isEmail(),
    check('passwordL','La contraseña es obigatoria').not().isEmpty(),
    validarCampos
],LogearPost);

module.exports = rutas;