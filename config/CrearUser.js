const {response} = require('express');

const Usuario = require('../models/usuarios');
const bcrypt = require('bcrypt');





const UserGet = (req,res)=>    {res.send('<h1>Get api - response </h1>')};


const UserPost = async(req,res = response)=>   {
    
    const {nombreR,correoR,edadR,passwordR,generoR,rolR} = req.body;
    

    //verificar EMAIL
    const existeEmail = await Usuario.findOne({correo:correoR});

    if(existeEmail){
        return res.status(400).send('Este correo ya esta registrado');
    }


    try
    {

        let  usuario = new Usuario({nombre:nombreR,correo:correoR,edad:edadR,password:passwordR,genero:generoR,rol:rolR});

        // Encriptar 
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(passwordR,salt);

        //GUARDAR EN DB 
        await usuario.save();
        
        pagina =   `<h1>Datos Registrados</h1><br><p>Nombre: ${nombreR}<p><br><p>E-mail: ${correoR}<p><br>
                    <p>Edad: ${edadR}<p><br><p>Password: ENCRIPTID<p><br><p>Rol: ${rolR}<p>`

        res.send(pagina)
    
    }

catch(err)
    {
        console.log(err);
        return res.status(500).json({msg:'Hable con el administrado'});
    }

};


const UserPut = (req,res)=>    {res.send('<h1>Put api - response </h1>')};
const UserPacht = (req,res)=>  {res.send('<h1>Pacht api - response </h1>')};
const UserDelete = (req,res)=> {res.send('<h1>Delete api - response </h1>')};


module.exports = {UserGet,UserPost,UserPut,UserPacht,UserDelete};