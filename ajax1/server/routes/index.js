 var express = require('express');
 var router = express.Router();

/* 显示注册页面 */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

let users=['ren','yao','mimi'];

router.post('/check',(req,res,next)=>{
    // let username=req.query.username;
     let username=req.body.username;
    if(users.find(user=>user==username)){
        res.send("对不起，已占用---"+username)
    }else{
        res.send("<p style='color:red;'>恭喜，该用户名可以使用---</p>"+username)
    }
})

  module.exports = router;
