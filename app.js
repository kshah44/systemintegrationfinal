'use strict';


const async = require('async');
const fs = require('fs');
const path = require("path");
const createReadStream = require('fs').createReadStream
const sleep = require('util').promisify(setTimeout);
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;
const express = require("express");
const bodyParser = require('body-parser');
var cors = require('cors');
const jwt = require('jsonwebtoken');
const fileUpload = require('express-fileupload');





const app = express();

app.use(fileUpload());

require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


let key = process.env.CV_API_KEY;
let endpoint = process.env.CV_ENDPOINT
if (!key) { throw new Error('Set your environment variables for your subscription key and endpoint.'); }


let computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({inHeader: {'Ocp-Apim-Subscription-Key': key}}), endpoint);

app.post('/describe'/*,auth*/,(req,res)=>{

 
    
    
    
    if(req.files != null){
        let file = req.files.photo.data;
        computerVisionClient.describeImageInStream(file)
        .then(data=>{
            // console.log(data);
            res.json(data);
            
        }).catch(err =>{
            // console.log(err);

            res.json(err);
            
        })

    }else{
        let url  = req.body.photo;
        computerVisionClient.describeImage(url)
        .then(data=>{
            // console.log(data);
            res.json(data);
            
        }).catch(err =>{
            // console.log(err);

            res.json(err);
            
        })

    }

    


    
    
});

app.post('/analyzecategories'/*,auth*/,(req,res)=>{

 
    
    
    
    if(req.files != null){
        let file = req.files.photo.data;
        computerVisionClient.analyzeImageInStream(file)
        .then(data=>{
            // console.log(data);
            res.json(data);
            
        }).catch(err =>{
            // console.log(err);

            res.json(err);
            
        })

    }else{
        let url  = req.body.photo;
        computerVisionClient.analyzeImage(url)
        .then(data=>{
            // console.log(data);
            res.json(data);
            
        }).catch(err =>{
            // console.log(err);

            res.json(err);
            
        })

    }

    


    
    
});

app.post('/analyzetags'/*,auth*/,(req,res)=>{

 
    
    
    
    if(req.files != null){
        let file = req.files.photo.data;
        computerVisionClient.analyzeImageInStream(file,{visualFeatures: ['Tags']})
        .then(data=>{
            // console.log(data);
            res.json(data);
            
        }).catch(err =>{
            // console.log(err);

            res.json(err);
            
        })

    }else{
        let url  = req.body.photo;
        computerVisionClient.analyzeImage(url,{visualFeatures: ['Tags']})
        .then(data=>{
            // console.log(data);
            res.json(data);
            
        }).catch(err =>{
            // console.log(err);

            res.json(err);
            
        })

    }

    


    
    
});

app.post('/analyzeobjects'/*,auth*/,(req,res)=>{

 
    
    
    
    if(req.files != null){
        let file = req.files.photo.data;
        computerVisionClient.analyzeImageInStream(file,{visualFeatures: ['Objects']})
        .then(data=>{
            // console.log(data);
            res.json(data);
            
        }).catch(err =>{
            // console.log(err);

            res.json(err);
            
        })

    }else{
        let url  = req.body.photo;
        computerVisionClient.analyzeImage(url,{visualFeatures: ['Objects']})
        .then(data=>{
            // console.log(data);
            res.json(data);
            
        }).catch(err =>{
            // console.log(err);

            res.json(err);
            
        })

    }

    


    
    
});

app.post('/analyze'/*,auth*/,(req,res)=>{

 
    
    
    
    if(req.files != null){
        let file = req.files.photo.data;
        computerVisionClient.analyzeImageInStream(file,{visualFeatures: ['Objects','Faces',"Brands","Color","Adult","Description","Tags"]})
        .then(data=>{
            // console.log(data);
            res.json(data);
            
        }).catch(err =>{
            // console.log(err);

            res.json(err);
            
        })

    }else{
        let url  = req.body.photo;
        computerVisionClient.analyzeImage(url,{visualFeatures: ['Objects','Faces',"Brands","Color","Adult","Description","Tags"]})
        .then(data=>{
            // console.log(data);
            res.json(data);
            
        }).catch(err =>{
            // console.log(err);

            res.json(err);
            
        })

    }

    


    
    
});

app.get('/jwt', (req, res)=>{
        let token = jwt.sign({
            email: req.body.email,
        },
        process.env.SECRET_KEY,
            {expiresIn:"2h"},
            {algorithm: "HS256"},
           
    )
    res.send(token);
    });
    
    
  
    
function auth(req, res, next){
        try {
        const bearerToken = req.headers.authorization.split(" ")[1];
    
        const resp = jwt.verify(bearerToken, process.env.SECRET_KEY, {algorithm: "HS256" })
    
        req.email=resp;
    
       next();
            
        } catch (error) {
            return res.status(403).send({
                message: 'Auth failed'
            });
            
        }
       
}






app.listen(3030);

