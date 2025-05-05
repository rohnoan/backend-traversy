import express from 'express'
import {getPosts,getPost,deletePost,updatePost,createPost} from '../controllers/postController.js'
const router=express.Router();

let posts=[
    {id:1,title:'post one'},
    {id:2,title:'post two'},
    {id:3,title:'post three'},
]

//get all posts
router.get('/',getPosts)

//get single post
router.get('/:id',getPost)

//create new post
router.post('/',createPost)

//update
router.put('/:id',updatePost)
export default router;

//delete
router.delete('/:id',deletePost)