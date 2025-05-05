journey notes backend

roadmap-    
    git
    data structures and algorithms
    design patterns 
    databases - mongoDB
    web framework - express
    
callbacks 
promises 
async await

synchronous-
    u wan wait until its done (one after other)
asynchronous-
    u want it to work parallely

callbacks-
    it just says after youre finished with this do this next.

promises-
    "I promise to do something. If I succeed, I'll tell you (resolve). If I fail, I'll also tell you (reject)."

    promise.all() - Promise.all() takes an array of promises and waits for all of them to complete.

async await
    async/await is a way to handle tasks that take time (like fetching data, saving something, etc.) without stopping the rest of your code.


    
nodeJS-
    covered-
        whats nodeJS
        modules import/export
        http modules req/res routing 
        middleware
        other core modules
        
    whats nodeJS
        (1) a JS runtime environment(runtime environment is a software that enables a program to run on a computer )
        (2)used for developing server side apps and apis
        (3)takes JS outta the browser

    how does node work? 
        -non blocking - doesnt wait around for input/output operations rather uses events and callbacks
        -single threaded - one can execute a time 
        -event loop - keeps the loop spinning without waiting for task

    export syntax-
        commonJS(CJS)-
            module.exports=generateRandomNumber;
            const generateRandomNumber=require('./utils')
        ES modules(ESM)- preferable
            export default funcn
            import  funcn from "./funcn.js";

    http module and create server -
        - import http to create the server
        - create server with req, res to handle requests and responses
        - use res.end() or res.write() to send something back
        - use server.listen() to start and listen to the server
    .gitignore- 
        what not to push on github (node modules)
    .env-   
        these are the things you dont wan push in git repos because it contains your api keys and stuff
    postman-
        how to use postman extension to send request
    routing(outdated)-           
        __filename for current file name
        __dirname will give you dir name 
                
        const __filename=url.fileURLToPath(import.meta.url)
        const __dirname=path.dirname(__filename)

        -make a filepath variable
        -path.join the page you want to join
    simple API-
        checks if route matches the requested url
    middleware-
        modules/functions that have access to the requests and responses bc they sit in the middle
        
        -Add extra functionality before your final route runs.
        -Reuse code (like logging every request or checking authentication).
        -Control the flow of requests.
        -Handle errors.
        -Modify requests or responses easily.
    get req body for post-  
        how to post-

        Collect Request Data: Listens to incoming data chunks from the request body and combines them into a complete string (body).

        Parse JSON: After all data is received (end event), it parses the body string into a JavaScript object using JSON.parse().

        Save the User: Adds the new user object to the existing users array.

        Send Response: Responds with status code 201 (Created) and returns the newly added user as JSON.
    file system module-
        What are they?
            readFile: Reads data from a file.
            writeFile: Creates or overwrites a file with data.
            appendFile: Adds data to the end of a file.
        Where are they used?
            Logging server data.
            Reading config files.
            Saving temporary reports.
            Local file storage (only on server-side).
        Why are they used?
            To manage files on the server.
            For backup or export.
            For log tracking.
            For reading static data.
        Are they used in MERN?
            Not common.
            MERN uses MongoDB for data.
            Can be used for logs, configs, or reports if needed.
    path files
        method              description                                     example output
        path.basename()	    Returns the file name.	                        test.txt
        path.dirname()	    Returns the directory path.	                    ./dir1/dir2
        path.extname()	    Returns the file extension.	                    .txt
        path.parse()	    Returns object with full path breakdown.	    { root, dir, base, ext, name }
        url.fileURLToPath()	Converts module URL to file path.	            Absolute path of the file.
        __dirname	        Directory name of the current module.	        Folder path of the file.
        path.join()	        Joins paths together (platform safe).	        /user/dir1/dir2/test.txt
        path.resolve()	    Resolves absolute path from relative paths.	    /user/dir1/dir2/test.txt
    os modules
        import os from 'os';
        about the computer systmes info
        user info()
        totalmem()
        freemem()
        cpus()
    url 
        urlObj
        url.format
        import.meta.url
        fileurltopath()
        urlObj.search
    crypto module
        Feature	Description
        Purpose	For encryption, hashing, secure data handling.
        Usage	Protect passwords, tokens, and sensitive data.
        Common Methods	createHash(), randomBytes(), createCipheriv().
    emitting events
        
    process object

<!-- expressJS-
    whats express-
        -minimal and flexible web framework of nodeJS
        -used for building server side applications and APIs
        -simplifies the process of handling HTTP requests
        -fast and unopinionated
    opinionated-    
        -suggested ways to do things
        -usually offers a lot of bells and whistles
        -strict folder structure
        -example-django,next,etc
    unopinionated-
        -different ways to do the same thing
        -includes the bare necessities
        -structure folders how you want
        -example-express,flask,etc
    covered in this course- 
        -routing
        -reqs and respone
        -custom middleware
        -crud operations
        -template engines
        -error handling
        -3rd party npm packages
        -controllers
        -fetching from frontend
        -envirenment variables
    basic server-   
        import express
        at '/' define some output
        listen on a port
    res.sendFile-
        used for returning static pages
    request params- 
        params is object that holds route parameters or url parameters

        example-    
            app.get('/api/posts/:id', (req, res) => {
                console.log(req.params); 
                res.send(`Post ID is ${req.params.id}`);
            });
            on visiting-http://localhost:8000/api/posts/2
            clg-{ id: '2' }
            respone- post id is 2

    query strings-  
        app.get('/api/posts',(req,res)=>{
            console.log(req.query)
            const limit=parseInt(req.query.limit);
            if(!isNaN(limit) && limit>0){
                res.json(posts.slice(0,limit))
            }else{
                res.json(posts)
            }
        })

        -always keep them in limits to avoid SQL injection
    route files-
        import router files from other files

    req.body-
        access data sent by client
    
    post put delete-
        refer-routes/post.js
    
    middleware-
        -has access to requests and responses
        -loggin,authentication
        -
     -->

expressJS
    -minimal and flexible web framework for nodejs
    -used for server side web apps
    -simplifies handling http reqs and responses

    opinionated-
        hard rules and bells and whistles

    unopinionated-
        diff ways to do the same thing
        chill
    covered-    
        routing
        reqs res
        middleware 
        crud
        template engines
        error handling
        3rd party npm packages
        controllers
        fetchning from frontend
        env vars
    