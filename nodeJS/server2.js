import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

const users = [
    { id: 1, name: 'rohan' },
    { id: 2, name: 'ohan' },
    { id: 3, name: 'han' },
];

//logger middleware

const logger=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next();
}

//json middleware

const jsonMiddleware=(req,res,next)=>{
    res.setHeader('Content-Type','application/json');
    next();
}

//route handler for /api/users
const getUsersHandler=(req,res)=>{
    res.write(JSON.stringify(users));
    res.end();
}

//route handler for /api/users/:id
const getUserByIdHandler=(req,res)=>{
    const id = parseInt(req.url.split('/')[3]);
    console.log(id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.write(JSON.stringify({ message: 'User not found' }));
    }
    res.end();
}

//not found handler

const notFoundHandler=(req,res)=>{
    
    res.statusCode=404;
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();
}

//router handler for post /api/users
const createUserHandler=(req,res)=>{
    let body='';
    //listen for data
    req.on('data',(chunk)=>{
        body+=chunk.toString();
    });
    req.on('end',()=>{
        const newUser=JSON.parse(body);
        users.push(newUser);
        res.statusCode=201;
        res.write(JSON.stringify(newUser));
        res.end();

    })
}
const server = createServer((req, res) => {
    logger(req,res,()=>{
        jsonMiddleware(req,res,()=>{
            if(req.url==='/api/users' && req.method==='GET'){
                getUsersHandler(req,res);
            }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method==='GET'){
                getUserByIdHandler(req,res);
            }else if(req.method==='POST' && req.url==='/api/users'){
                createUserHandler(req,res);

            }else{
                notFoundHandler(req,res);
            }
        })
    })
    
});

server.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
