
import { error } from 'console';
import express from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js'

const router=express.Router();



const logger=(req,res,next)=>{
    console.log(`${req.method}  ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
}

//get all posts with limit query
router.get('/',getPosts)

//single post
router.get('/:id',getPost)

//create new post
router.post('/',createPost)

//update posts
router.put('/:id',updatePost)

//delete posts
router.delete('/:id',deletePost)
export default router;