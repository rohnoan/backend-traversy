//get all posts
//route GET /api/posts

export let posts=[
    {id:1,title:'post1'},
    {id:2,title:'post2'},
    {id:3,title:'post3'}
];
export const getPosts=(req,res)=>{
    console.log(req.query)
    const limit=parseInt(req.query.limit);
    if(!isNaN(limit) && limit>0){
        return res.status(200).json(posts.slice(0,limit))
    }
    res.status(200).json(posts)
}

//get single post
//route

export const getPost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post =posts.find((post)=>post.id===id)
    if(!post){
        const error= new Error(`post with  id ${id} not found`)
        error.status=404;
        return next(error)
    }
    res.status(200).json(post)
}

//creat a post

export const createPost=(req,res,next)=>{
    const newPost={
        id:posts.length+1,
        title:req.body.title
    };
    if(!newPost.title){
        const error= new Error(`please include title`)
        error.status=400;
        return next(error)  
    }
    posts.push(newPost);
    res.status(201).json(posts)
}
//update
export const updatePost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((post)=>post.id===id);

    if(!post){
        const error= new Error(`post with  id ${id} not found`)
        error.status=404;
        return next(error)
    }
    post.title=req.body.title;
    res.status(200).json(posts); 
}


//delete post
export const deletePost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((post)=>post.id===id)
    
    if(!post){
        const error= new Error(`post with  id ${id} not found`)
        error.status=404;
        return next(error)    
    }

    posts=posts.filter((post)=>post.id!==id);
    res.status(200).json(posts);
}