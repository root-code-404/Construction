const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes=require('./routes/userRoutes')

dotenv.config();
connectDB();

const app = express();
const { chats } = require('./data/data');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

app.use(express.json()); // to accept json data

app.get('/',(req,res)=>{
    res.send("API is running succcefully");
})
app.get('/api/chat',(req,res)=>{
   res.send(chats);
 
})

app.get('/api/chat/:id',(req,res)=>{
    // console.log(req.params.id)
        const singlechat=chats.find((c)=>c._id===req.params.id);
        res.send(singlechat);
})

app.use('/api/user',userRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT=process.env.PORT||5000
app.listen(PORT,console.log(`Server running on PORT ${PORT}`))