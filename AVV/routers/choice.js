const express = require('express');
const session = require('express-session');
const router = express.Router();
const Choices = require("../models").Choice;
const path = require('path');

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
});

//작성중 이미지 클릭시 votecnt++
router.post('/voted', function(request, response){
    console.log('와 되누 섹'); // 이미지 어디있냐 그거를 이제 feed에서 받아올거임음
    //걍 일단 그러면 ajax 예시만 보여드림ㅇㅋ
    response.send({result:false});
})

router.get('/voted',(req,res)=>{
    res.sendFile(path.join(__dirname , 'testtest.html'));    
})

module.exports = router;