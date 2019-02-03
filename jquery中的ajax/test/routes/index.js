 var express = require('express');
 var router = express.Router();

 /* GET home page. */
 router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
 });

 let users = ["ren", 'yao', 'mimi'];

 // router.get('/check', (req, res, next) => {
 //     let username = req.query.username.trim();
 //    if(users.find(user => user == username)) {
 //           res.send({code:1, msg:'对不起,被占用'});
 //     } else {
 //         res.send({code:0, msg:'恭喜你,注册成功'});
 //   }
 //
 // })
 module.exports = router;
