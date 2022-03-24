const {model,Schema} = require('mongoose');

const UsuarioSchema = new Schema({
    nombre:{
        type:String,
        required:[true,'El Nombre es obligatorio'],
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true,
    },
    edad:{
        type:Number,
        required:[true,'La edad es obligatoria'],
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatoria'],
    },
    rol: {
        type:String,
        require:true,
        enum: ['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }

})

module.exports = model('Usuarios',UsuarioSchema);