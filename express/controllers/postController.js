
let posts=[
    {id:1,title:'post one'},
    {id:2,title:'post two'},
    {id:3,title:'post three'},
]

//get all posts
export  const getPosts=(req,res,next)=>{
    const limit=parseInt(req.query.limit);
    if(!isNaN(limit) && limit>0){
        return res.status(200).json(posts.slice(0,limit));
    }
    res.status(200).send(posts);
    
}

//get single post
export  const getPost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((post)=>post.id===id);
    if(!post){
        const error=new Error(`a post with the id ${id} not found`);
        return next(error);
    }
    res.status(200).send(post);
}

//create new post
export  const createPost=(req,res,next)=>{
    const newPost={
        id:posts.length+1,
        title:req.body.title
    }
    if(!newPost){
        const error=new Error(`a post with the id ${id} not found`);
        return next(error);
    }
    posts.push(newPost);
    res.status(201).json(posts);
}

//delete

export  const deletePost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((post)=>post.id===id)
    if(!post){
        const error=new Error(`a post with the id ${id} not found`);
        error.status=404
        return next(error);
    }
    posts=posts.filter((post)=>post.id!==id);
    res.json(posts);
}
//update
export  const updatePost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((post)=>post.id===id)
    if(!post){
        const error=new Error(`a post with the id ${id} not found`);
        return next(error);
    }
    post.title=req.body.title;
    res.status(200).json(posts);
}