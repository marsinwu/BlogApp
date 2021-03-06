var express = require('express');
var router = express.Router({mergeParams: true});

/* GET one post information page. */
router.get('/', function (req, res, next) {
    /* Getting post id*/
    var postId = req.params.id;
    /* Finding post*/
    BlogApi.findById(postId, function (err, postsResults) {
        if (err) {
            console.log(err);
        } else {
            // console.log(postsResults);
            res.render('postsshow', {
                title: 'Post detail',
                author: 'Pimpek Max',
                post: postsResults
            });
        }
    });
});

/* PUT Editing current post */
router.put('/', function (req, res, next) {
    /* Getting post id and other parameters in order to update the post*/
    var postId = req.params.id;
    var postTitle = req.sanitize(req.body.postTitle);
    var postBody = req.sanitize(req.body.postBody);
    var postImageUrl = req.body.postImage;
    /* Fiding and updating the post */
    BlogApi.findByIdAndUpdate(postId, {
            title: postTitle,
            body: postBody,
            image: postImageUrl
        },
        function (err, result) {
            if (err) {
                res.redirect('/posts');
            } else {
                //console.log("Item updated");
                res.redirect("/posts/" + postId);
            }
        });
});

/* Delete route removing post */
router.delete('/', function (req, res, next) {
    var postId = req.params.id;
    BlogApi.findByIdAndRemove(postId, {},
        function (err) {
            if (err) {
                res.redirect('/');
            } else {
                //console.log("Item removed");
                res.redirect("/");
            }
        });
});

module.exports = router;
