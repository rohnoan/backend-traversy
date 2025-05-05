import express from 'express'
import path from 'path'
import logger from './middleware/logger.js'
import posts  from './routes/posts.js'
import errorHandler from'./middleware/error.js'
const port=process.env.PORT||8000;

const app=express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//logger middleware
app.use(logger)

//setup static folder
//app.use(express.static(path.join(__dirname,'public')))

//routes
app.use('/api/posts',posts)

app.use((req,res,next)=>{
    const error=new Error('not found');
    error.status=404
    next(error);
})

//error handler
app.use(errorHandler);

app.listen(port,()=>console.log(`server is running on port ${port}`))
