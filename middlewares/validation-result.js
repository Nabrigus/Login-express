const { validationResult } = require("express-validator");

//Validar datos con express

const validarCampos = (req,res,next)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){   return res.status(400).send(errors)}
    next();
}

module.exports = {validarCampos}