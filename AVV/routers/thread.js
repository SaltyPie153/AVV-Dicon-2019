const express = require('express');
const session = require('express-session');
const router = express.Router();
const Threads = require("../models").Thread;

router.post('/feed', function(request, response){
    let title = request.body.title;
    let category = request.body.category;
    let profileimg = request.body.profileimg;

    Threads.create({
        title: title,
        category: category,
        profileimg: profileimg
    }).then(function(result){
        console.log(result);
    }).catch(function(err){
        console.error(err);
    });
});

module.exports = router;