const express = require('express');

const app = express();
//公共的开放服务接口处理方式
app.use('*', (req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
     res.setHeader('Access-Control-Allow-Credentials', true);
     res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE,OPTIONS');
     next();
})

app.get('/ajax', (req, res) => {
    res.json({
        code:0, msg:'4000跨域成功'
    })
})

app.listen(4000, () => {
    console.log('4000 ok');
})