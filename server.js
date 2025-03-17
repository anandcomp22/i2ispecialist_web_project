import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(morgan("dev"));

app.use("/api/v1/user", userRoutes);

app.get('/',(req,res)=>{

})

app.get("/", (req, res) => {
    res.send("API is running...");
  });

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=> {
    console.log(`Server running on ${process.env.DEV_MODE} on port ${PORT}`)
})