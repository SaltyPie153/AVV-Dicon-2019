const express = require('express');
const session = require('express-session');
const router = express.Router();
const Feeds = require("../models").Feed;
const upload = require('../multerconfig')
const path = require('path');

router.get('/feed', function (request, response) {
    response.sendFile(path.join(__dirname + '/feed.html'));
})

router.post('/upload', upload.array('file'),function(request, response, next){
    console.log(request.file)
    response.send(request.file.path)
});

router.post('/feed', upload.array('file'), function(request, response){
    let title = request.body.title;
    let content = request.body.content;
    let category = request.body.category;
    let image = request.files.map((it)=>it.path);

    Feeds.create({
        title: title,
        content: content,
        category: category,
        image: image.join('|'),
    }).then(function(result){
        console.log(result);
    }).catch(function(err){
        console.error(err);
    });
});

module.exports = router;