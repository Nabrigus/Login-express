const { response } = require( 'express' );
const {compareSync} = require('bcrypt');
const Usuario = require('../models/usuarios');
const LogearPost = async(req,res = response)=>
{
    const {correoL,passwordL} = req.body;
    try{
       
        //Verificar si el mail existe
        const usuario = await Usuario.findOne({correo:correoL})
        if( !usuario ){return res.status(400).json({msg:'Este Correo no esta registrado - correo'})}
       
        //Si el usuario esta activo
       if( !usuario.estado){return res.status(400).json({msg:'Este Correo no esta registrado - Estado:false'})}
       
       //Verificar la contraseña
        const validatePassword = compareSync(passwordL,usuario.password);
        if(!validatePassword){return res.status(400).json({msg:'Este Correo no esta registrado - Password'})}
       //generar el JWT
        
       //Respuesta final
       res.send('LOGIN-PERFECTO')
        
       }
       catch(err){
           console.log(err);
           return res.status(500).json({msg:'Hable con el administrador'});
       }
};

module.exports = {LogearPost};