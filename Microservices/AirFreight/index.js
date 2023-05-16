const express =require("express")
const app=express();
const port =6000;
require("./db/connection")
var cors = require('cors');
app.use(cors());
const router=require("./routes/routes");

const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerJsDocs=YAML.load("./api.yaml")
app.use( "/app-prefix/air-docs",swaggerUI.serve,swaggerUI.setup(swaggerJsDocs))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// app.get('/protected', authenticateToken, (req, res) => {
//     // Access the authenticated user's information
//     const user = req.user;
//     res.json({ message: 'Protected route', user });
//    });

app.use(router)

app.listen(`${port}` ,()=>{
    console.log("you are listening on ",port )
})