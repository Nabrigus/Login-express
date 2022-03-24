const express = require('express');
const DBconection = require('../database/conectardb');

class server{
    constructor(){
        this.app = express();
        this.crearUser = '/api/url';
        this.loginUser = '/api/auth'
        this.port = process.env.PORT;

        //Conexion DB
        this.conectardb();

        //MIDDLEWARE
        this.middleware();
        
        //RUTAS
        this.routes();
    }
    async conectardb(){
        await DBconection();
    }

    middleware(){

        this.app.use( express.json() );

        this.app.use( '/main',express.static('public') );
        
        this.app.use( express.urlencoded({extended:false}) );
        


        
    }
    
    routes(){
        
        this.app.use( this.crearUser,require('../routes/usuarios') );
        this.app.use( this.loginUser,require('../routes/login') );
        
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server conectado al puerto: ${this.port}`);
        });

    }
}

module.exports = server;