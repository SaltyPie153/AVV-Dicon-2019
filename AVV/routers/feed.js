const express = require('express');
const session = require('express-session');
const router = express.Router();
const Feeds = require("../models").Feed;
const path = require('path');

router.get('/feed', function (request, response) {
    response.sendFile(path.join(__dirname + '/feed.html'));
})

router.post('/feed', function(request, response){
    let title = request.body.title;
    let content = request.body.content;

    Feeds.create({
        title: title,
        content: content
    }).then(function(result){
        console.log(result);
    }).catch(function(err){
        console.error(err);
    });
});

module.exports = router;