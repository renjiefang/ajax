var express = require('express');
var router = express.Router();
const path = require('path');



let users = ["ren", 'yao', 'mimi'];

router.post('/check1', (req, res, next) => {
    let username = req.query.username.trim();
    console.log(username);
    if(users.find(user => user == username)) {
        res.send({code:1, msg:'对不起,被占用'});
    } else {
        res.send({code:0, msg:'恭喜你,注册成功'});
    }

})
module.exports = router;






