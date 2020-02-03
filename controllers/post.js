const Post = require('../models/post')

exports.getPosts = (req, res) => {
    
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    //console.log("Creating Post: ", req.body);

    post.save().then(result => { 
        res.status(200).json({
            post: result
        })
    })
}
