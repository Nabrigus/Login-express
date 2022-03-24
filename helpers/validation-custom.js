const Role = require('../models/roles');

const Custom001 = async(rolR = '')=>{
    const existeRol =  await Role.findOne({rol:rolR})
    if(!existeRol){ throw new Error(`El rol ${ rolR } no esta registrado en la BD`);}
}

module.exports = {Custom001}