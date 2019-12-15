const express = require('express');
const session = require('express-session');
const router = express.Router();
const Choices = require("../models").Choice;

router.post('/feed', function(request, response){
    let description = request.body.description;
    let image = request.body.image;
    let votecnt = request.body.votecnt;

    Choices.create({
        description: description,
        image: image,
        votecnt: votecnt
    }).then(function(result){
        console.log(result);
    }).catch(function(err){
        console.error(err);
    });
//작성중 이미지 클릭시 votecnt++
    if(onclick.image){
        votecnt++;
    }
});

module.exports = router;