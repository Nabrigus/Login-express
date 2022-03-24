// REQUIRES TERCEROS
const {Router} = require('express');
const {check} = require('express-validator');

// REQUIRES PROPIOS
const {validarCampos} = require('../middlewares/validation-result');
const {Custom001} = require('../helpers/validation-custom');

const {UserGet,
       UserPost,
       UserPut,
       UserPacht,
       UserDelete} = require('../config/CrearUser');

const rutas = Router();


rutas.get('/'   ,UserGet);

// ROUTES POST 

rutas.post('/check/On',
[
    check('correoR','El correo no es valido y es obligatorio').isEmail(),
    check('nombreR','El nombre es obligatorio').not().isEmpty(),
    check('passwordR','La contraseña debe tener al menos 6 caracteres').isLength({min:6}),
    check('rolR').custom(Custom001),
    validarCampos
],

UserPost);



rutas.put('/'   ,UserPut);
rutas.patch('/' ,UserPacht);
rutas.delete('/',UserDelete);


module.exports = rutas;