const express = require('express');
const session = require('express-session');
const router = express.Router();
const Threads = require("../models").Thread;
const Feeds = require("../models").Feed;
const cookies = require('cookie-parser');
const multer = require('multer');
const upload = require('../multerconfig')
const path = require('path');

router.get('/thread', function (request, response) {
    response.sendFile(path.join(__dirname + '/thread.html'));
})

router.post('/uploads', upload.array('file'),function(request, response, next){
    console.log(request.file)
    response.send(request.file.path)
});

router.post('/thread', upload.array('file'), function(request, response){
    let title = request.body.title;
    let category = request.body.category;
    let profileimg = request.files.map((it)=>it.path);
    let UserId = request.session.uid;

    Threads.create({
        title: title,
        category: category,
        profileimg: profileimg.join('|'),
        UserId: UserId,
    }).then(function(result){
        console.log(result);
        var suc = {success: true}
        response.json(suc);
    }).catch(function(err){
        console.error(err);
        var fuc = {success: false}
        response.json(fuc);
    });
});
//R
router.get('/board', function(request, response, next) {
    Threads.findOne({
        where:{id: request.query.tid},
        include:[{
            model:Feeds
        }]
    }).then(data=>{
        console.log(data.Feeds)
    })
});

module.exports = router;