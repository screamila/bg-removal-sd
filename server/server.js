import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js';


// App Config
const PORT = process.env.PORT || 4000
const app = express();
await connectDB()

// Intialize Middleware
app.set(express.json())
app.use(cors())


// API Routes
app.get('/', (req,res)=> res.send("API Working."))

app.listen(PORT, ()=> console.log("Server Running on port "+ PORT))