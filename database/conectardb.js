const mongoose = require('mongoose');

const DBconection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log(`Base de datos conectada con el usuario: ${process.env.USER}`);
    }
    catch(err){
        console.log(err);
        throw new Error('Ha ocurrido un error al conectar a la base de datos')
    }

}

module.exports = DBconection;