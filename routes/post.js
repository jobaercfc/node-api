const express = require("express")
const postController = require('../controllers/post');
const validators = require('../helpers')

const router = express.Router();

router.get('/', postController.getPosts);
router.post('/post', validators.createPostValidator, postController.createPost);

module.exports = router;