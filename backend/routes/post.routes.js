const express = require('express')
const { setPosts, getPosts, editPost,deletePosts,likePost,dislikePost } = require('../controllers/post.controller')

const router  = express.Router()


router.get("/", getPosts)



router.post("/", setPosts)

router.put("/:id", editPost)

router.delete("/:id", deletePosts)

router.patch("/like-post/:id", likePost)

router.patch("/dislike-post/:id", dislikePost)

module.exports = router