const express = require('express');
const session = require('express-session');
const router = express.Router();
const Feeds = require("../models").Feed;
const Threads = require("../models").Thread;
const upload = require('../multerconfig')
const path = require('path');

router.get('/feed', function (request, response) {
    response.sendFile(path.join(__dirname + '/feed.html'));
})

router.post('/upload', upload.array('file'), function (request, response, next) {
    console.log(request.file)
    response.send(request.file.path)
});

router.post('/feed', upload.array('file'), function (request, response) {
    let title = request.body.title;
    let content = request.body.content;
    let category = request.body.category;
    let image = request.files.map((it) => it.path);
    let ThreadId = request.body.threadid;

    Feeds.create({
        title: title,
        content: content,
        category: category,
        image: image.join('|'),
        ThreadId: ThreadId,
    }).then(function (result) {
        console.log(result);
        var suc = { success: true }
        response.json(suc);
        console.log('ThreadId: ', request.body.threadid)
    }).catch(function (err) {
        console.error(err);
        var fuc = { success: false }
        response.json(fuc);
    });
});

module.exports = router;