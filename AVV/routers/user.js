const express = require("express")
const router = express.Router()
const crypto = require('crypto');
const path = require('path')
const Users = require("../models").User;

router.get('/register', function (request, response) {
    response.sendFile(path.join(__dirname + '/register.html'));
})

router.post('/register', function(request, response){
    let name = request.body.name;
    let password = request.body.password;
    let email = request.body.email;
    let age = request.body.age;
    let gender = request.body.gender;
    let type = request.body.type;

    var shasum = crypto.createHash('sha1');
    shasum.update(password);
    password = shasum.digest('hex');

    Users.findOne({where: {email:email} })
    .then(function(data){
        if(data != null){
            console.log("중복된 회원입니다.");
            var fal = {success:false};
            response.json(fal);
            return;
        }else{
            Users.create({
                name: name,
                password: password,
                email: email,
                age: age,
                gender: gender,
                type: type
            }).then(function(result){
                response.send({
                    success:true
                })
            }).catch(function(err){
                response.send({
                    success:false
                })
            });
        }
    })
})

router.get('/login', function (request, response) {
    response.sendFile(path.join(__dirname + '/login.html'));
})

router.post('/login', function(request, response){
    var password = request.body.password;
    var email = request.body.email;
    
    var shasum = crypto.createHash('sha1');
    shasum.update(password);
    password = shasum.digest('hex');

    Users.findOne({where: {email:email} })
    .then(function(data){
        if(data == null || data == undefined){
            console.log("존재하지 않는 회원입니다.");
            var fal = {success:false};
            response.json(fal);
            return;
        }
        if(data.password != password){
            console.log("비밀번호가 틀립니다.");
            response.json(fal);
        }else{
            console.log("로그인 성공");
            var session = request.session;
            session.username = data.name;
            session.email = data.email;
            session.uid = data.id;
            console.log('set session :' + session);
            var suc = {success:true};
            response.json(suc);
        }
    })
    .catch(function(err){
        console.log(err);
    })
});

router.get('/visitors',function(request,response){
    var visitors = request.cookies.visitors || 0;

    visitors++;
    response.cookie('visitors', visitors,{
        maxAge: 1000
    });
    response.send('visitors: ' + visitors);

    console.log('Cookies: ',request.cookies)
    console.log('Signed Cookies: ',request.signedCookies)
    console.log('user:',request.session.username)
    console.log('userid:',request.session.uid)
})

router.get("/isLogined",function(request,response){
    console.log(request.session)
    let res = request.session.username ? true : false
    console.log(res)
    response.json({
        success: res
    })
})

module.exports = router