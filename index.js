import productsRoutes from './routes/products.js';
import { DBconnection } from "./db.js";
import express from 'express';

//const bodyParser = require('body-parser')
//const cors = require('cors')
const app = express()

DBconnection();


//settings
app.set('port',process.env.PORT || 8000 )

//Middlewares
//app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//app.use('/books',require('./routes/route-books'))

app.use(productsRoutes)


app.get('/',(req,res)=>{
    //console.log(req);
    res.send("api working!")
})

app.listen(app.get('port'),()=>console.log(`Server listen at port ${app.get('port')}`))