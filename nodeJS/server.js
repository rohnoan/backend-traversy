import http from 'http';
import dotenv from 'dotenv';
import fs from 'fs/promises'
import url from 'url';
import path from 'path';

dotenv.config();

const __filename=url.fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
console.log(__filename)
console.log(__dirname)

//get current path

//__filename for current file name
//__dirname will give you dir name 
const PORT=process.env.PORT;

const server=http.createServer(async(req,res)=>{
    // res.setHeader('Content-type','text/html');
    // res.statusCode=404;
    try {
        if(req.method==='GET'){
            let filePath;
            if(req.url==='/'){ 
                filePath=path.join(__dirname,'public','index.html')
            }else if(req.url==='/about'){
                filePath=path.join(__dirname,'public','about.html')

            }else{
                throw new Error('not found');
            }   
            const data=await fs.readFile(filePath)
            res.setHeader('Content-Type','text/html')
            res.write(data);
            res.end();
        }else{
            throw new Error('method not allowed')
        }
    }catch(error){
        res.writeHead(500,{'Content-type':'text/html'})
        res.end('<h1>server error</h1>');
    }
})

server.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`)
})