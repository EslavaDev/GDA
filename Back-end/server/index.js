const debug = require('debug')('camilo:serve')
const express = require('express');
const winston = require('winston');
const mongoose = require('mongoose');
const path = require('path');
const fileUpload = require('express-fileupload');
const http = require('http');
const https= require('https');
const cors = require('cors');
const env = process.env.NODE_ENV
const routeConfig = require('./routes');
const dbUrl = "mongodb://localhost:27017/fileshare"



const app = express();
const server = http.createServer(app);

//require('./config');

// default options
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

 // use it before all route definitions
 app.use(cors({ origin: '*' }));
 app.use(fileUpload());
 routeConfig(app);

mongoose.connect(dbUrl, { autoIndex: false,
    useNewUrlParser: true })
    
    mongoose.connection.on('connected', () => {
        ('Mongoose connection is open ', dbUrl)
        if (env ==='dev') {			
            serve = serve		
        }else{
            server = https.createServer(app)
        }
    })
    
    mongoose.connection.on('error', function (err) {
        debug(`Connection ERROR ${err}`)
        winston.info('Mongoose connection has occured ' + err + ' error')
    })
    
    mongoose.connection.on('disconnected', function () {
        winston.info('Mongoose is disconnected')
    })
    
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            debug(`Connection terminate`)
            winston.info('Mongoose connection is disconnected due to application termination')
            process.exit(0)
        })
    })
    
   
   

    module.exports = server;