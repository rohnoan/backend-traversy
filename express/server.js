import express from 'express';
import path from 'path';
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import { fileURLToPath } from 'url';

//dirname and filename workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT=process.env.PORT|| 8080;

const app=express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//logger middleware
app.use(logger);

//setup static folder
app.use(express.static(path.join(__dirname,'public')));
app.use('/api/posts',posts);

app.use(notFound)
//error handler
app.use(errorHandler)

app.listen(8000,()=>console.log(`server running on port 8000`));
