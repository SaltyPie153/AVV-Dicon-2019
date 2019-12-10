const express = require('express');
const session = require('express-session');
const router = express.Router();
const Questions = require("../models").Question;

router.post('/feed', function(request, response){
    let type = request.body.type;

    Questions.create({
        type: type
    }).then(function(result){
        console.log(result);
    }).catch(function(err){
        console.error(err);
    });
});

module.exports = router;