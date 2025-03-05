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
        u dont wan wait until its done (one after other)
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